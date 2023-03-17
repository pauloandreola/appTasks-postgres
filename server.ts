import express from 'express';
import { database } from './database.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  database();
  res.send('POST request to the homepage');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});