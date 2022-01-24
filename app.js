const express = require('express');

// Creating server
const app = express();

// Middlewares for parsing body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Handling Get request
app.get('/', (req,res) => {
    console.log('request coming..');
    console.log(req.body);
    return res.status(200).send("Home Page");
})

// Handling Post request
app.post('/welcome', (req,res) => {
    const {name} = req.body;
    return res.status(200).send(`Welcome ${name}`);
})


app.listen(8000, () => {
    console.log('server listening on port 8000....');
})