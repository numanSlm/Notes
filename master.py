from pyspark.sql.functions import col, collect_list, concat_ws

# Step 1: Get table constraints to match constraint names with table names
table_constraints_df = spark.sql("""
    SELECT constraint_name, table_schema, table_name
    FROM system.information_schema.table_constraints
""")

# Step 2: Get referential constraints (maps FK constraint to PK constraint)
referential_constraints_df = spark.sql("""
    SELECT constraint_name, unique_constraint_name
    FROM system.information_schema.referential_constraints
""")

# Step 3: Get column-to-constraint mapping
key_column_usage_df = spark.sql("""
    SELECT constraint_name, table_schema, table_name, column_name
    FROM system.information_schema.key_column_usage
""")

# Step 4: Join to map FK constraints to their respective tables
fk_relations_df = key_column_usage_df.alias("fk") \
    .join(referential_constraints_df.alias("rc"), col("fk.constraint_name") == col("rc.constraint_name")) \
    .join(table_constraints_df.alias("tc"), col("rc.unique_constraint_name") == col("tc.constraint_name")) \
    .select(
        col("fk.table_schema"),
        col("fk.table_name").alias("from_table"),
        col("fk.column_name"),
        col("tc.table_name").alias("to_table")
    )

# Step 5: Aggregate results to get a full mapping per table
master_table = fk_relations_df.groupBy("table_schema", "from_table") \
    .agg(
        collect_list("column_name").alias("all_keys"),
        collect_list(concat_ws(" -> ", col("column_name"), col("to_table"))).alias("all_relations")
    )

master_table.show(truncate=False)
