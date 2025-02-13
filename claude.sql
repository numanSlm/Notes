WITH foreign_keys AS (
    SELECT 
        c.table_catalog,
        c.table_schema,
        c.table_name,
        c.column_name,
        k.constraint_name,
        k.referenced_table_schema,
        k.referenced_table_name,
        k.referenced_column_name
    FROM information_schema.columns c
    JOIN information_schema.key_column_usage k
        ON c.table_catalog = k.table_catalog
        AND c.table_schema = k.table_schema
        AND c.table_name = k.table_name
        AND c.column_name = k.column_name
    WHERE k.referenced_table_name IS NOT NULL
)

SELECT 
    f.table_name AS source_table,
    STRING_AGG(DISTINCT 
        CASE 
            WHEN f.referenced_table_name IS NOT NULL 
                THEN f.column_name 
            ELSE r.column_name 
        END, 
        ', '
    ) AS related_keys,
    STRING_AGG(DISTINCT 
        CASE 
            WHEN f.referenced_table_name IS NOT NULL 
                THEN CONCAT(f.column_name, '->', f.referenced_table_name)
            ELSE CONCAT(r.column_name, '<-', r.table_name)
        END,
        '; '
    ) AS relationships
FROM foreign_keys f
LEFT JOIN foreign_keys r 
    ON f.referenced_table_name = r.table_name
GROUP BY f.table_name
ORDER BY f.table_name;
