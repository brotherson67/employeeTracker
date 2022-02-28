
INSERT INTO departments (dep_name)
VALUES
    ("Client Support" ),
    ("Engineering"),
    ("C-Class"),
    ("Development");

INSERT INTO roles (role_name, role_description, dep_id)
VALUES 
    ("solutions archectect", "this is a job", 2),
    ("head honcho", "hes a leader", 3),
    ("sales lead", "he'll sell you anything", 1);

INSERT INTO employees(first_name, last_name, role_id)
VALUES
    ('james', 'Fraser', 1),
    ('Jack', 'London', 2),
    ('Robert', 'Bruce', 3),
    ('Peter', 'Greenaway', 2),
    ('Derek', 'Jarman', 1),
    ('Paolo', 'Pasolini', 2);