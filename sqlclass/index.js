const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'kiet@2502',
});

let q = "INSERT INTO temp (id, username, email, password) VALUES (?,?,?,?)";
let temp = ["123", "john", "hohn@gmail.com","abc"];

try {
    connection.query(q,temp,(err,result) =>{
    if(err) throw err;
    console.log(result);
});
} catch (err) {
    console.log(err);
}

connection.end();


// let getRandomUser = () =>{
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };
// console.log(getRandomUser());


