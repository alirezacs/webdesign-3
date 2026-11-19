/*let i=0;
let num=Number(prompt("enter your number"));
while(num>=i){
    if(i % 2==0){
        console.log(i);
        
    }
    i++;
}*/
let num= Number(prompt("enter your number"));
let guess= Number(prompt("enter your guess"));
while(guess!=num){
    guess= Number(prompt("your guess incorrect"));
}
alert("👍😁😂");