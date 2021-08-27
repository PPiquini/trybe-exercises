-- Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e 
-- internacionais ( international_sales ) de cada filme.

SELECT m.title, b.domestic_sales, b.international_sales
FROM Movies as m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id;