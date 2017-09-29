-- DROP DATABASE burgers_db IF EXISTS;

CREATE DATABASE burgers_db;
  USE burgers_db;
  CREATE TABLE burgers(
    id INTEGER(10) AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN default false,
    date TIMESTAMP,
    PRIMARY KEY(id)
  );

SELECT * FROM burgers;
