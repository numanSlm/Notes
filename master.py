from pyspark.sql.functions import collect_list, col, concat_ws
from pyspark.sql import SparkSession

# Initialize Spark session
spark = SparkSession.builder.appName("MasterTable").getOrCreate()

# Unity Catalog Schema
catalog_name = "your_catalog"  # Update with actual catalog
schema_name = "your_schema"  # Update with actual schema

# Get all tables in the catalog/schema
tables_df = spark.sql(f"SHOW TABLES IN {catalog_name}.{schema_name}")
table_list = [row.tableName for row in tables_df.collect()]

relations = []

for table in table_list:
    query = f"""
    SELECT constraint_name, table_name, column_name, referenced_table_name
    FROM {catalog_name}.information_schema.referential_constraints 
    WHERE table_schema = '{schema_name}' AND table_name = '{table}'
    """
    
    fk_df = spark.sql(query)

    for row in fk_df.collect():
        relations.append((table, row.column_name, row.referenced_table_name))

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
