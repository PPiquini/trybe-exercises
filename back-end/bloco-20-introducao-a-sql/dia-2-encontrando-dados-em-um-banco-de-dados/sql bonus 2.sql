select Pieces.name, Provides.price from Pieces,Provides
where Pieces.code = Provides.piece ORDER BY Provides.price DESC;