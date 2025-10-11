// const info = require("./Fruits");



// console.log(info[0].name);




// const figlet = require("figlet");

// figlet("ALLAH MUHAMMAD", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

import {sum ,PI} from "./math.js";
import {generate} from "random-words"

console.log(generate());
console.log(PI);
console.log(sum(1,9));