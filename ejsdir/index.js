const express = require('express');
 
let app = express();

let port = 8080;

app.listen(port,() => {
    console.log(`Server isa running at this port ${port}`);
});

