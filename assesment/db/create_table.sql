CREATE TABLE `movies`.`movie_data` (
  `ID` INT AUTO_INCREMENT,
  `TITLE` VARCHAR(45) NOT NULL,
  `RELEASE_YEAR` INT NOT NULL,
  `LANGUAGE` VARCHAR(45) NOT NULL,
  `CREATED_AT` DATETIME NOT NULL,
  PRIMARY KEY (`ID`));

SELECT * FROM MOVIES.MOVIE_TABLE;

CREATE TABLE `students`.`student_data` (
  `ID` INT AUTO_INCREMENT,
  `NAME` VARCHAR(45) NOT NULL,
  `MARKS` INT NOT NULL,
  PRIMARY KEY (`ID`));

SELECT * FROM STUDENTS.STUDENT_DATA;