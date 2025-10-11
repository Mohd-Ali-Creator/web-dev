// ques1
// let userName = prompt("Enter your name :");
// let userAge = prompt("Enter your age :");
// alert(`${userName} is ${userAge} years old.`);

// ques2
// let Quarter = 2 ;
// switch (Quarter) {
//   case 1: console.log("January, February, March");
//   break;
//   case 2: console.log("April, May ,June");
//   break;
//   case 3: console.log("July, August, September");
//   break;
//   case 4: console.log("October, November, December");
//   break;
//   default: console.log("Invalid Input!");
// }

// ques3
// let str = "ALIKHAN";
// if(str[0] ==='A' && str.length > 5){
//   console.log(`${str} is a golden string`);
// }else{
//   console.log(`${str} is not a golden string.`);
// }

// ques4
// let  a = prompt("Enter num1");
// let  b = prompt("Enter num2");
// let  c = prompt("Enter num3");

// if(a>b && a>c){
//   alert("a is greater");
// }else if(b>a && b>c){
//   alert("b is greater");
// }else if(c>a && c>b){
//     alert("c is greater");
// }else{
//     alert("All are Equal");
// }


// ques5
// let num1 = prompt("Enter num1:");
// let num2 = prompt("Enter num2:");
// (num1[num1.length - 1] === num2[num2.length - 1]) ? alert(`num1 = ${num1} and num2 = ${num2} has equal last digit ${num1.length -1}`) : alert(`num1 = ${num1} and num2 = ${num2} has not equal last digit`);


// String lecture 3

// ques1
// let msg ="help!";
// console.log(msg.trim().toUpperCase());

// ques2
// let naam = "ApnaCollege";
// console.log(naam.slice(4,9));
// console.log(naam.indexOf("na"));
// console.log(naam.replace("Apna","Our"));
// console.log(naam.slice(4).replace('l','t').replace('l','t'));



// let student = ["Mohd" , "Ali" , "Khan"]
// console.log(student);

// let arr = [['X',null,'O'],[null,'X',null],['O',null,'X']];

// ans1
// let arr = [7,9,0,-2];
// let n =3;
// let ans =arr.slice(0,n);
// console.log(ans);

// ans2
// let arr = [7,9,0,-2];
// let n= 3;
// let ans = arr.slice(1,n+1);
// console.log(ans);

// ans3
// let  str = prompt("Enter a string : ");
// if(str.length ==0){
//   console.log("String is blank");
// }else{
//   console.log("String is not blank");
// }

// ans4
// let char = "MohdAliKhan";
// let idx = 4;
// if(char[idx] == char[idx].toLowerCase()){
//   console.log(`character at index ${idx} is in lowercase`);
// }else{
//   console.log(`character at index ${idx} is not in lowercase`);
// }

// ans 5
// let naam = prompt("Enter a String :");
// console.log(naam.trim());

// ans6
// let arr = [1,2,3,4,5,6,7,8,];
// let target = 7;
// let p =arr.indexOf(target);
// if(p != -1){
//   console.log((`Target ${target} found at index ${p}`))
// }else{
//   console.log(`Target ${target} not found in the array`);
// }


// odd Number
// for(let i=10;i>=2;i-=2){
//   console.log(i);
// }

// multiplication table of 5
// let input = prompt("Enter a number to print its multiplication table:");
// let n= parseInt(input);
// console.log(`Multiplication table of ${n}:`);
// for(let i=1;i<=10;i++){
//   console.log(`${n} * ${i} = ${n*i}`);
// }



// Favourite Movie guess game 
// const favMovie = "Avengers";
// let userGuess = prompt("Guess my favourite movie:");
// while((favMovie != userGuess) && (userGuess != "quit")){
//   userGuess = prompt("Wrong guess! please try again or type 'quit' to exit:");
// }
// if(userGuess == favMovie){
//   console.log("Congratulations! You guessed it right.");
// }else{
//   console.log("You quit the game. My favourite movie is Avengers.");
// }


// Loops for Array
// let heroes = [["Ironman" ,"spiderman" , "thor"],["superman","wonder women", "flash"]];

// for(let i=0;i<heroes.length;i++){
//   console.log(`List # ${i}`);
//   for(let j=0;j<heroes[i].length;j++){
//     console.log(heroes[i][j]);
//   }
// }


// object literals
// const student ={
//   name:"Mohd Ali Khan",
//   age: 21,
//   phone_no:9580862303,
//   address: "LLucknow,UP,India"
// }
// console.log(student);



// Thread/Twitter like app
// const post = {
//   usernmae : "Mohd Ali Khan",
//   content : "Wish you all the very best!",
//   likes : 222,
//   reposts : 43,
//   tages : "#king@li"
// };


// calculate avg
// function avg(a,b,c){
//   let average = (a + b + c) / 3;
//   console.log(average);
// }

// avg(2,3,4);
// avg(6,6,6);


// 23 july  assignment - 4
// ques1
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i =0;i<=arr.length;i++){
//   if(arr[i] == num){
//     arr.splice(i,1);
//   }
// }
// console.log(arr);

// ques2
// let number = 287152;
// let count =0;
// while(number > 0){
//   count ++;
//   number = Math.floor(number/10);
// }
// console.log(count);

// ques3
// let number = 2785145;
// let sum=0;
// let temp=number;
// while(temp>0){
//   sum += temp%10;
//   temp = Math.floor(temp/10);
// }
// console.log(sum);

// ques4
// let number =7;
// let factorial = 1;
// for(let i =1;i<=number;i++){
//   factorial *= i;
// }
// console.log(`Factorial of ${number} is ${factorial}.`);


// ques5 largest number. find
// let arr = [5, 2, 9, 1, 5, 6];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(`Largest number in the array is ${largest}.`);


// javascript Assignment- 5

// random number of roll dice 
// let num = Math.floor(Math.random() * 6) + 1 ;
// console.log(`Random number between 1 and 6 is ${num}`);


// let car =  {
//   name: "BMW",
//   model: "X5",
//   color: "Black",
// }
// console.log(car.name)

// let person = {
//   name  : "Mujtaba Ali",
//   age   : 21,
//   city  : "Lucknow"
// }
// console.log(person.name);

// person.city  = "New York";

// console.log(person.city);

// console.log(person);

// person.country = "USA";
// console.log(person.country);

// console.log(person);



// function practise
// function printPoem(){
//   console.log("Twinkle, twinkle little star \n How I wonder what you are!\n Like a diamond in the sky,\n What you wounder what you are!");
// }

// printPoem();

  // let num = parseInt(prompt("Enter a number to print its multiplication table:"));
// function multiplication(num){
//   console.log(`Multiplication table of ${num}:`);
//   for(let i=1;i<=10;i++){
//     console.log(`${num} * ${i} = ${num*i}`);
// }
// }








// let number=5;
// for(let i=number;i<=number*10;i+=number){
//   console.log(`${number} * ${i/number} = ${i}`);
// }





// const sum = (a,b) => {
//   console.log(a+b);
// }

// const cube = a => {
//   console.log(a**3);
// }

// const mul = (a,b) => (a*b);
// const sum = (a,b) => (a+b);
// const diff = (a,b) => (a-b);
// const power = (a,b)  => (a**b);


// console.log("Hello , how are you?");
// console.log("This is a simple JavaScript program.");

// setTimeout(() => {
//   console.log("Mohd Ali Fees Is paid");
// },4000);


// setTimeout(() => {
//   console.log("Mohd Ali Khan is a good student");
// },5000);



// const square = (n) => (n*n);

// const square =(n) => {
//   return n*n;
// }

// const square = n => n*n;



// assigm=nment of JAvaScript-7

// ques1
// const arrayAverage = (arr) => {
//   let sum = 0;
//   for(let i=0;i<arr.length;i++){
//     sum +=arr[i];
//   }
//   return (sum / arr.length);
// }

//   let arr = [15,248,89,926,262,6626,666,19,5445,45,45,8788];
//   console.log(arrayAverage(arr));


// ques2
// const isEven = num => (num%2==0);

// num=8;
// console.log(isEven(num));



// array reduce method 

// let num = [1,2,3,4,5,6,7,8,9,10];
// let finalval = num.reduce((res,el) => {
//   console.log(res);
//   return res*el;
// });
// console.log(finalval);

// let arr =[2,4,5,67,8,9,0,4,3,2,143,5];
// let max = -1;
// for(let i=0;i<arr.length;i++){
//   if(arr[i] > max){
//     max = arr[i];
//   }
// }
// console.log(max);


// let arr =[2,4,5,167,8,9,0,4,3,2,143,5];
// let final = arr.reduce((max,el) => {
//   return max>el ? max : el;
// });
// console.log(final);


// let arr = [10,20,30,40,8];
// let mul =arr.every(el => el%10==0);
// console.log(mul);

let arr  = [23,4,5,56,6];
let min = arr.reduce((min,el) => {
  return min<el ? min : el;
});

console.log(min);