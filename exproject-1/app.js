// First Express module.
import express from 'express';
const app = express();
const port = process.env.port || '3000';

app.get('/',(req, res) => {
    res.send('Hello shubham .!')
});

app.listen(port, ()=> {
    console.log(`Server listeing at http://localhost:${port}`)
});