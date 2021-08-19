SELECT * from Provides;
SELECT * from Providers;
SELECT * from Pieces;

SELECT 
    Pieces.name, Provides.price
FROM
    Pieces,
    Provides
WHERE
    Pieces.code = Provides.piece
        AND Provides.provider = 'HAL'
ORDER BY Provides.price DESC;