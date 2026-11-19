/* Oprators */
// let number1 = false;
// let number2 = "10";
// console.log(!number1);


// console.log(10 != 10);
// let age = prompt("Please Enter Your Age");

/* Conditions */
// let firstName = "jafar";
// if(firstName === "Alireza"){
//     console.log("Hello Alireza");
// }else if(firstName === "Parsa"){
//     console.log("Hello Parsa");
// }else{
//     console.log("Hello Farbod");
// }

/* Switch Case */
// let firstName = "Alireza";
// switch(firstName){
//     case "Alireza":
//         console.log("Hello Alireza");
//         break;
//     case "Mamad":
//         console.log("Hello Mamad");
//         break;
//     default:
//         console.log("Hello Farbod");
        
// }

/* Function */
// let firstNumber = parseInt(prompt("First Number"));
// let secondNumber = parseInt(prompt("Second Number"));

// function sum(fn, sn){
//     return fn + sn;
// }

// let res = sum(firstNumber, secondNumber);

// console.log(res);

/* Concat in js */
// let firstName = "Alireza";
// let lastName = "Mardani";

// console.log(`Hello ${firstName} ${lastName} How Are You?`);

/* Loops */
// for(let i = 0; i < 100; i++){
//     console.log(i);
// }

// let i = 0;
// while(i < 100){
//     console.log(i);
//     i++;
// }

// let i = 0;

// do{
//     console.log(i);
//     i++;
// }while(false);

// let password = "";

// do{
//     password = prompt("Enter Your Password");
// }while(password != '1234')

// console.log("Password Is Correct");

// for(let i = 0; i < 100; i++){
//     console.log(`i = ${i}`);
//     for(let j = 0; j < 100; j++){
//         console.log(`j = ${j}`);
//     }
// }

/* Array In JS */
// let users = ["Alireza", "Mamad", "Mobina", "TEst"];
// let arr = [12, 14, 66, 77];
// users.toString();
// users.push("TEST");
// users.pop();
// users.join('*')
// Array.isArray("test")
// users.concat(arr)
// delete users[0];
// users.slice(2, 3)

// let users = ["Alireza", "Mohammad", "Mobina", "Amirali", "Ayda", "Zeynab", "Farbod", "Abolfazl", "Yalda"];

// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }

/* Map Function */
let users = ["Alireza", "Mohammad", "Mobina", "Amirali", "Ayda", "Zeynab", "Farbod", "Abolfazl", "Yalda"];

// users.map(function (user){
//     console.log(user);
// });

// let result = users.filter(function (user){
//     return user[0]  === "A";
// })

// console.log(result);

/* Object in JS */
// let user = {
//     id: 1,
//     firstName: "Alireza",
//     lastName: "Mardani",
//     age: 22,
//     field: "Programmer",
// }

// console.log(user.field);

// let products = [
//     {
//         productId: 1,
//         title: "Iphone 17ProMax",
//         storage: 256,
//         color: "silver",
//         ram: 8
//     },
//     {
//         productId: 2,
//         title: "Iphone 17ProMax",
//         storage: 256,
//         color: "white",
//         ram: 8
//     },
//     {
//         productId: 3,
//         title: "Iphone 17ProMax",
//         storage: 512,
//         color: "silver",
//         ram: 8
//     },
//     {
//         productId: 4,
//         title: "Iphone 16ProMax",
//         storage: 256,
//         color: "silver",
//         ram: 8
//     },
// ]

// console.log(products.find(function(product){
//     return product.productId === 3;
// }));

/* Arrow Function */
// function sum(n1){
//     console.log(n1 + 1);
// }

// let sum = (n1) => {
//     console.log(n1 + 1);
// }

// sum(10);


// let users = ["Alireza", "Mohammad", "Mobina", "Amirali", "Ayda", "Zeynab", "Farbod", "Abolfazl", "Yalda"];
// users.map((user) => {
//     console.log(user);
    
// })

/* Events in JS */
// let btn = document.getElementById('btn');

// window.addEventListener('wheel', (e) => {
//     console.log("Scorlled");
// })

/* Localstorage */
let username = prompt('Enter Your Username: ')

// localStorage.setItem("username", username)