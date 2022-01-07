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

//how to use [Array Of Call-back] .
//First Example of more the One CallBack. 
    //In the first exp, we use ',' to sepret first fun() to create another CAllBACK(); 
    //And we cannot use res.send(); at a same time.
    // If your not usig next funcation then user browser will stack in loop.
    app.all('/morethenone-callback', (req, res, next) => {
        console.log('first call back fun()')
        // res.send("About Page");
        next();
    }, (req, res) => {
        res.send("More then one call back");
    });



//How to set defoult Page or Page not found Page.
app.all('*', (req, res) => {
    res.send("Page Not found ..!!!");
});

app.listen( port, () => {
    console.log(`Server lesting at http://localhost:${port}`)
});