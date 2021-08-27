SELECT * from Provides;
SELECT * from Providers;
SELECT * from Pieces;

SELECT 
    Providers.name, Provides.price
FROM
    Providers,
    Provides
WHERE
    Providers.code = Provides.provider
ORDER BY Provides.price DESC
LIMIT 4 OFFSET 3;