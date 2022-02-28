USE election; 

INSERT INTO departments (dep_name)
VALUES
    ("Client Support" ),
    ("Engineering"),
    ("C-Class"),
    ("Development");

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("solutions archectect", 100000, 2),
    ("head honcho", 1200000 3),
    ("sales lead", 80000 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('james', 'Fraser', 1, null),
    ('Jack', 'London', 2, 1),
    ('Robert', 'Bruce', 3, 3),
    ('Peter', 'Greenaway', 2, 2),
    ('Derek', 'Jarman', 1, null),
    ('Paolo', 'Pasolini', 2, 3);