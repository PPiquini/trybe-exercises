-- Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , 
-- que retornem as avaliações dos filmes lançados depois de 2009.

SELECT m.title, b.rating
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON b.movie_id = m.id
WHERE m.year > 2009;

SELECT title, (
	SELECT rating
    FROM BoxOffice
) AS rating
FROM Movies
WHERE `year` > 2009;