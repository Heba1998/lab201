 'use strict';

 let username =prompt('what is your name ?');
 console.log(username);
 alert(" Hello " + username + " ! My name is Heba, Let's start with a short quiz not to determine your level but only to increase your knowledge ^.^ , please answer them for just yes/no ");

 let Q1 = prompt('Does the computer understand human language?');

 switch (Q1.toUpperCase()) {
     case 'NO','N':
         console.log('Correct answer ');
         alert("correct answer");
         break;
    
     case 'YES','Y':
         console.log('Wrong answer');
         alert("Wrong answer");
         break;
    
 }


 let Q2 = prompt('Is 1 yes or no in binary?');

 switch (Q2.toUpperCase()) {
     case 'YES','Y':
         console.log('Correct answer ');
         alert("correct answer");
         break;
    
     case 'NO','N':
         console.log('Wrong answer');
         alert("Wrong answer");
         break;
    
 }


 let Q3 = prompt('2 is 10 in binary?');

 switch (Q3.toUpperCase()) {
     case 'YES','Y':
         console.log('Correct answer ');
         alert("correct answer");
         
         break;
    
     case 'NO','N':
         console.log('Wrong answer');
         alert("Wrong answer");
         break;
    
 }



 let Q4 = prompt('In binary, is the answer of the following question correct  10+1000=1010?');

 switch (Q4.toUpperCase()) {
     case 'YES','Y':
         console.log('Correct answer ');
         alert("correct answer");
         break;
    
     case 'NO','N':
         console.log('Wrong answer');
         alert("Wrong answer");
         break;
    
 }




 let Q5 = prompt('Letters are not converted to binary in a computer like a numbers ?');

 switch (Q5.toUpperCase()) {
     case  'NO','N':
         console.log('Correct answer ');
         alert("correct answer");
         break;
    
     case 'YES','Y':
         console.log('Wrong answer');
         alert("Wrong answer");
         break;
    
 }

    
 alert("You are amazing! thank you " + username );