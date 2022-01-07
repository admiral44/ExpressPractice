// Routing in Express JS
import express from 'express';
const app = express();
const port = process.env.port || '3000';

app.listen('/', (req, res) => {
    console.log(`Server lesting http://localhost:${port}`)
});