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
        next(); // use [next] prope in this fun() we can move to the next callback.
    }, (req, res) => {
        res.send("More then one call back");
    });

    //Second Example of Arrays[] of CallBack.
    //In this example we careate 3 callback. using ES6 JS.
    const cb1 = (req, res, next) => {
        console.log('First Call Back');
        next();                             // we create business login in between this and use next(). 
    }
    const cb2 = (req, res, next) => {
        console.log('Second Call Back');
        next();                             // we create business login in between this and use next(). 
    }
    const cb3 = (req, res, next) => {
        console.log('Third Call Back');
        res.send('This is Arrays of CallBack.');
    }
    app.get('/arraycallback', [ cb1, cb2, cb3 ]);

    //Third Example of Combinations of CallBack.
    // Do not use same varibale like [cb1,cb2].
    const tcb1 = (req, res, next) => {
        console.log('First Call Back');
        next();                             // we create business login in between this and use next().
    }
    const tcb2 = (req, res, next) => {
        console.log('Second Call Back');
        next();                             // we create business login in between this and use next().
    }
    app.get('/combofcallback', [ tcb1, tcb2 ], (req, res, next) => {
        console.log('Third Call Back')
        next();                             // we create business login in between this and use next().
    }, (req, res) => {
        res.send("FORTH CAllBACK, Combination of Call Backs");
    });

//Chain Rout CALLBACK.
//Now we using app.route for set defoult path to all methodes.
// ' ; ' using semicolan is not reqired in Express or Chain Route CallBack.
    // First example of Chain Route CallBack
    app.route('/ch-rtcallback')
        .get((req, res) => {
            res.send("Display all student useing GET Method");
        })
        .post((req, res) => {
            res.send("Add new student useing POST Method");
        })
        .put((req, res) => {
            res.send("Update student useing PUT Method");
        })

    // Second example of Chain Route CallBack/.ALL /Validiation
    //ALL method and validation
    //use space when use Chain Route
    app.route('/ch-rtcallback-all')
        .all((req, res, next) =>{
            console.log('First .ALL Methoed will Display')      // No matter custmor reqest this will excute all the time. so we can ser validication in here.
            next()                             // we create business login in between this and use next().
        })
        .get((req, res) => {
            console.log('GET METHOD')
            res.send("Display all student useing GET Method");
        })
        .post((req, res) => {
            console.log('POST METHOD')
            res.send("Add new student useing POST Method");
        })
        .put((req, res) => {
            console.log('PUT METHOD')
            res.send("Update student useing PUT Method");
        })




//How to set defoult Page or Page not found Page.
app.all('*', (req, res) => {
    res.send("Page Not found ..!!!");
});

app.listen( port, () => {
    console.log(`Server lesting at http://localhost:${port}`)
});