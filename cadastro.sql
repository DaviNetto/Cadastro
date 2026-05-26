bank de dados para cadastro de usuários
CREATE DATABASE CadastroDB;
USE CadastroDB;
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
comando para inserir um novo usuário
INSERT INTO Usuarios (nome, email, senha) VALUES ('DaviAnetto')


