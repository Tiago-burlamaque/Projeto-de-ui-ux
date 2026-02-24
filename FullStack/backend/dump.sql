CREATE SCHEMA `fullstack` ;

CREATE TABLE `fullstack`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `email` VARCHAR(225) NULL,
  `senha` VARCHAR(225) NULL,
  `ativo` INT NULL DEFAULT 1,
  PRIMARY KEY (`idusuario`));
