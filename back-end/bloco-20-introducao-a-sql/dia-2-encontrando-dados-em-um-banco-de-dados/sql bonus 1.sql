select Pieces.name, Provides.price from Pieces,Provides
where Pieces.code = Provides.piece AND Provides.provider = 'RBT';