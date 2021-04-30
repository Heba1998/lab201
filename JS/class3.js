'use strict';
let score=0;
let username =prompt('what is your name ?');
function f1(){

while(!username){
    username=prompt("please, enter your name")
}

alert(" Hello " + username + " ! My name is Heba, Let's start with a short quiz not to determine your level but only to increase your knowledge ^.^ , please answer them for just yes/no ");

}
f1();


function f2 (){

let Q1 = prompt('Does the computer understand human language?');

switch (Q1.toUpperCase()) {
    case 'N':
    case 'NO':    
       
        alert("correct answer");
        score++;
        break;


    case 'YES':
    case 'Y':
      
        alert("Wrong answer, the correct answer is : NO");
        break;
}
}
f2();


function f3(){
let Q2 = prompt('Is 1 yes or no in binary?');

switch (Q2.toUpperCase()) {
    case 'YES':
    case 'Y':
      
        alert("correct answer");
        score++;
        break;


    case 'NO':
    case 'N':
       
        alert("Wrong answer, the correct answer is : YES");
        break;  
}
}
f3();


function f4 (){
let Q3 = prompt('2 is 10 in binary?');

switch (Q3.toUpperCase()) {
    case 'YES':
    case 'Y':
        
        alert("correct answer");
        score++;
        break;

    case 'NO':
    case 'N':
      
        alert("Wrong answer, the correct answer is : YES");
        break 
}
}
f4();


function f5 () {
let Q4 = prompt('In binary, is the answer of the following question correct  10+1000=1010?');

switch (Q4.toUpperCase()) {
    case 'YES':
    case 'Y':
      
        alert("correct answer");
        score++;
        break;


    case 'NO':
    case 'N':
    
        alert("Wrong answer, the correct answer is : YES");
        break; 
}
}
f5();



function f6(){

let Q5 = prompt('Letters are not converted to binary in a computer like a numbers ?');

switch (Q5.toUpperCase()) {
    case  'NO':
    case  'N' :
      
        alert("correct answer");
        score++;
        break;
   

    case 'YES':
    case 'Y':
        
        alert("Wrong answer, the correct answer is : NO");
        break;
}
}
f6();


function f7 (){
let Q6 = prompt('In this question, please, enter a number, Guess the number in the decimal corresponds to this representation in the binary 0100101?');

Q6 = Number(Q6);

let i=0; 
while (i < 4) {
   if(Q6==37) {
       alert("correct, you are awesome");
   score++;
break; }
      
       else if (Q6 < 37){
   Q6= prompt("No, too low");

} else{
   Q6= prompt("No, too high");
   
}
i++;
}
alert("the correct answer is :37")
}
f7();



function f8(){

 
 let correct = false;
 let myfavnum = [99, 65, 3];
 
 for (let j = 0; j < 6; j++) {

    let Q7 = prompt ("last question, Guess my favorite number");
    Q7 = Number(Q7);
    console.log(Q7);
 
         for (let i = 0; i < myfavnum.length; i++) {
             if (Q7 == myfavnum[i]) {
                 alert('correct answer');
                 score++;
                 correct = true;
                  j = 7;
                 break;
             }
        
         }

         if (correct) {
             break;
         }
     }
     alert("My favorite number is :" + myfavnum);
    }
f8();
alert("your score is : " + score + ".......You are amazing! thank you " + username );

