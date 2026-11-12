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

let users = ["Alireza", "Mohammad", "Mobina", "Amirali", "Ayda", "Zeynab", "Farbod", "Abolfazl", "Yalda"];

for(let i = 0; i < users.length; i++){
    console.log(users[i]);
}