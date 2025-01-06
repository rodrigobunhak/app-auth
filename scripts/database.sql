CREATE TABLE IF NOT EXISTS users (
    id CHAR(36) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users (id, email, name, password, created_at, updated_at) VALUES
(UUID(), 'ana.silva@example.com', 'Ana Silva', '$2b$10$ExampleHash1', NOW(), NOW()),
(UUID(), 'maria.santos@example.com', 'Maria Santos', '$2b$10$ExampleHash3', NOW(), NOW()),
(UUID(), 'pedro.lima@example.com', 'Pedro Lima', '$2b$10$ExampleHash4', NOW(), NOW()),
(UUID(), 'lucas.almeida@example.com', 'Lucas Almeida', '$2b$10$ExampleHash5', NOW(), NOW()),
(UUID(), 'juliana.oliveira@example.com', 'Juliana Oliveira', '$2b$10$ExampleHash6', NOW(), NOW()),
(UUID(), 'fernando.melo@example.com', 'Fernando Melo', '$2b$10$ExampleHash7', NOW(), NOW()),
(UUID(), 'rafaela.rocha@example.com', 'Rafaela Rocha', '$2b$10$ExampleHash8', NOW(), NOW()),
(UUID(), 'carla.costa@example.com', 'Carla Costa', '$2b$10$ExampleHash9', NOW(), NOW()),
(UUID(), 'diego.ribeiro@example.com', 'Diego Ribeiro', '$2b$10$ExampleHash10', NOW(), NOW()),
(UUID(), 'camila.pereira@example.com', 'Camila Pereira', '$2b$10$ExampleHash11', NOW(), NOW()),
(UUID(), 'bruno.carvalho@example.com', 'Bruno Carvalho', '$2b$10$ExampleHash12', NOW(), NOW()),
(UUID(), 'aline.fernandes@example.com', 'Aline Fernandes', '$2b$10$ExampleHash13', NOW(), NOW()),
(UUID(), 'priscila.silveira@example.com', 'Priscila Silveira', '$2b$10$ExampleHash15', NOW(), NOW()),
(UUID(), 'leandro.azevedo@example.com', 'Leandro Azevedo', '$2b$10$ExampleHash16', NOW(), NOW()),
(UUID(), 'vanessa.barros@example.com', 'Vanessa Barros', '$2b$10$ExampleHash19', NOW(), NOW()),
(UUID(), 'tiago.teixeira@example.com', 'Tiago Teixeira', '$2b$10$ExampleHash20', NOW(), NOW()),
(UUID(), 'roberto.freitas@example.com', 'Roberto Freitas', '$2b$10$ExampleHash22', NOW(), NOW()),
(UUID(), 'larissa.dias@example.com', 'Larissa Dias', '$2b$10$ExampleHash23', NOW(), NOW()),
(UUID(), 'henrique.nascimento@example.com', 'Henrique Nascimento', '$2b$10$ExampleHash24', NOW(), NOW()),
(UUID(), 'daniela.assis@example.com', 'Daniela Assis', '$2b$10$ExampleHash25', NOW(), NOW());