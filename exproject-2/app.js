// Routing in Express JS
import express from 'express';
const app = express();
const port = process.env.port || '3000';

app.get('/', (req, res) => {
    res.send("Hello shubham walcome to Express Rounting project-2");
});

app.listen( port, () => {
    console.log(`Server lesting http://localhost:${port}`)
});