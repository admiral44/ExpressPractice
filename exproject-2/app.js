// Routing in Express JS
import express from 'express';
const app = express();
const port = process.env.port || '3000';

// this how we can set get methode and route in Express.
app.get('/', (req, res) => {
    res.send("Hello shubham walcome to Express Rounting project-2");
});

//How to set defoult Page or Page not found Page.
app.all('*', (req, res) => {
    res.send("Page Not found ..!!!");
});

app.listen( port, () => {
    console.log(`Server lesting at http://localhost:${port}`)
});