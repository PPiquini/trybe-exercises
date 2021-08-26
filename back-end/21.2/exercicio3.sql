--  Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) 
--  em ordem decrescente.

SELECT m.title, b.rating
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
ORDER BY b.rating DESC;