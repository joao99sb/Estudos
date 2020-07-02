-- criando a tabela estado
CREATE TABLE estado (
    id INT USINGED NOT NULL AUTO_INCREMENT,   
    nome VARCHAR(45)  NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    regia ENUM('Norte','Nordeste','Centro-Oeste', 'Sudeste', 'sul') NOT NULL,
    populacao DECIMAL(5,2),
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla) 
);  