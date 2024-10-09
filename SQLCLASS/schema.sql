SHOW TABLES;

CREATE TABLE user (id VARCHAR(50) PRIMARY KEY ,
username VARCHAR(50) UNIQUE, email VARCHAR(50)
UNIQUE NOT NULL, password VARCHAR(50) NOT NULL);

INSERT INTO user(id , username , email , password) 
VALUES ("126"," 126_newuser", "126def@gmail.com", "def1234")

