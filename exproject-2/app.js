// Routing in Express JS
import express from 'express';
const app = express();
const port = process.env.port || '3000';

// this how we can set get methode and route in Express.
app.get('/', (req, res) => {
    res.send("Hello shubham walcome to Express Rounting project-2");
});

//Usees of Asterisc symbol.
app.all('/shubham/*', (req, res) => {
    res.send("Diffrent use of * start symbol");
});

//Usees of String Path.
app.all('/about', (req, res) => {
    res.send("About Page");
});
app.all('/contact', (req, res) => {
    res.send("Contact Page");
});

//Usees of String Pattern.
app.all('/ab?cd', (req, res) => {
    res.send("This path can show page if we hit acd or abcd, but bcd is not allowed it will show you page not found. Other wise  page not page will displyed.");
});

//Usees of Reguler Expression Path.
// in Reguler expression '' are not allowed or not used in it.
app.all(/s/, (req, res) => {
    res.send("If we found s char in any postion in URL this page will be visible. otherwise Page Not Found.");
});



//How to set defoult Page or Page not found Page.
app.all('*', (req, res) => {
    res.send("Page Not found ..!!!");
});

app.listen( port, () => {
    console.log(`Server lesting at http://localhost:${port}`)
});