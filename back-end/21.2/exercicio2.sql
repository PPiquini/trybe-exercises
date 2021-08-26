-- Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme 
-- que possui um número maior de vendas internacionais ( international_sales ) 
-- do que vendas nacionais ( domestic_sales ).

SELECT m.title, b.international_sales
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;