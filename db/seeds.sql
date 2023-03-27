INSERT INTO department (name_id)
VALUES
    ("Astronomy"),
    ("Physics"),
    ("Engineering"),
    ("Bureaucratic");
    



INSERT INTO role (title,salary,department_id) 
VALUES
    ("Astrobiologist", 200000.0, 1),
    ("Geophysicist",150000.0,2),
    ("Electrical Engineer",100000.0,3),
    ("Administrative Manager", 80000.0,4),
    ("Administrator",90000.0,4),
    ("Deputy Administrator", 70000.0,4),
    ("Astrophysicist",300000.0,1),
    ("Particle Physicist", 150000.0, 2),
    ("Optical Engineer", 200000.0,3);



INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
     ("Pascale", "Ehrenfreund",1, "Bill Nelson"),
    ("Edmond", "Halley",2, "Bill Nelson"),
    ("Nikola", "Tesla",3, "Bill Nelson"),
    ("Robert D.", "Cabana",4, "Bill Nelson"),
    ("Bill", "Nelson",5, null),
    ("Pam", "Melroy",6, "Bill Nelson"),
    ("Tycho", "Brahe",7, "Bill Nelson"),
    ("George", "Cayley",8, "Bill Nelson"),
    ("Léon", "Foucault",9, "Bill Nelson");

