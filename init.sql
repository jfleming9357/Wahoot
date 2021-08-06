CREATE DATABASE IF NOT EXISTS wahoot;

CREATE TABLE IF NOT EXISTS wahoot.userTBL(  
    id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
    email varchar(255) NOT NULL
);

