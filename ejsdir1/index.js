const express = require('express');

let app = express();
const path = require('path');


let port = 5050;

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname, "/views"))

app.get('/', (req,res) => {
    // res.send('welcome to ejs template');
    res.render('home.ejs');
});

app.get("/rolldice",(req,res) =>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice",{diceVal});
});

app.get("/ig/:username",(req,res) => {
    const followers = ["alex","john","emma","jennifer"];
    let { username } = req.params;
    console.log(username);
    res.render("instagram",{ username , followers});
});


app.listen(port,()=>{
    console.log(`Server is running at this port ${port}`);
});



app.get('/',(req,res) => {
res.send('Hello server');
});

app.get('/home',(req,res) =>{
    res.send('welcome to home page');
});

app.get('/apple',(req,res) =>{
    res.send('Welcome to apple page');
});

app.get('/banana' , (req,res) => {
    res.send('Welcome to banana page');
});

app.use('/' ,(reeq,res) => {
    res.send(`404 page not found`);
});