from pyspark.sql.functions import collect_list, col, concat_ws
from pyspark.sql import SparkSession

# Initialize Spark session
spark = SparkSession.builder.appName("MasterTable").getOrCreate()

# Unity Catalog Schema
catalog_name = "your_catalog"  # Change to your Unity Catalog name
schema_name = "your_schema"  # Change to your schema name

# Get all tables in the catalog/schema
tables_df = spark.sql(f"SHOW TABLES IN {catalog_name}.{schema_name}")
table_list = [row.tableName for row in tables_df.collect()]

relations = []

for table in table_list:
    # Describe table to find foreign keys
    describe_df = spark.sql(f"DESCRIBE TABLE EXTENDED {catalog_name}.{schema_name}.{table}")
    describe_text = "\n".join([row.col_name for row in describe_df.collect()])

    for line in describe_text.split("\n"):
        if "Foreign Key" in line:  
            parts = line.split()
            key_name = parts[0]  # Extract key name
            related_table = parts[-1]  # Extract related table

            relations.append((table, key_name, related_table))

# Create a DataFrame
relations_df = spark.createDataFrame(relations, ["table_name", "key_name", "related_table"])

# Aggregate keys by table
master_table_df = relations_df.groupBy("table_name").agg(
    collect_list("key_name").alias("keys"),
    collect_list(concat_ws("->", col("key_name"), col("related_table"))).alias("key_to_table")
)

# Save master table in Unity Catalog
master_table_name = f"{catalog_name}.{schema_name}.master_table"
master_table_df.write.mode("overwrite").saveAsTable(master_table_name)

print(f"Master table created: {master_table_name}")
