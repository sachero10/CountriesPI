CREATE TABLE "Country"
(
  id varchar(3) PRIMARY KEY NOT NULL ,
  name varchar NOT NULL,
  flag varchar NOT NULL,
  continent varchar NOT NULL,
  capital varchar NOT NULL,
  subregion varchar,
  area integer,
  population integer NOT NULL
);

CREATE TABLE "Activity"
(
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  difficulty varchar NOT NULL,
  duration integer,
  season varchar NOT NULL
);