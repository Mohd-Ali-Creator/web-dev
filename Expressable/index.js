// const express = require("express");

// const app = express();

// let PORT = 3000;


// app.listen(PORT ,() =>{
//     console.log(`App is listening on port ${PORT}`);
// });


// app.use((req,res) => {
//     // console.dir(req);
//     console.log(`request accepting`);
//     // res.send("This is our server style");
//     // res.send("<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>");
//     res.send({
//         name: "Mohd ALi Khan",
//         power: "Everything"
//     });
// });

const express = require("express");

let app = express();

let PORT = 3000;

app.listen(PORT,() => {
    console.log(`app is running on port ${PORT}`);
});

// app.use((req,res) =>{
//     console.log("request received");
//     res.send("this is the basic response");
// });

app.get("/",(req,res)=>{
    res.send("hello , you entered in root");
});

app.get("/apple",(req,res)=>{
    res.send("you connected to the apple path");
});

app.get("/banana",(req,res)=>{
    res.send("you connected to the banana path");

});

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send("hello, you are in root1");
});

app.post("/",(req,res)=>{
    res.send("you posted something");
});


app.get("/search",(req,res)=>{
    let { q } = req.query;
    res.send(`you searched: ${q}`);
})

app.use((req,res)=>{
    res.send("you connected to the wrong path");
});


