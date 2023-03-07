import { database } from "./database.js";

const query = 'CREATE TABLE tasks (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, description VARCHAR(255), effort INT, completedAt DATE)';
database(query)