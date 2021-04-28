'use strict';
let score=0;
let username =prompt('what is your name ?');
while(!username){
    username=prompt("please, enter your name")
}

alert(" Hello " + username + " ! My name is Heba, Let's start with a short quiz not to determine your level but only to increase your knowledge ^.^ , please answer them for just yes/no ");



console.log(username);


let Q1 = prompt('Does the computer understand human language?');

switch (Q1.toUpperCase()) {
    case 'N':
    case 'NO':    
        console.log('Correct answer ');
        alert("correct answer");
        score++;
        break;


    case 'YES':
    case 'Y':
        console.log('Wrong answer');
        alert("Wrong answer");
        break;
}


let Q2 = prompt('Is 1 yes or no in binary?');

switch (Q2.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Correct answer ');
        alert("correct answer");
        score++;
        break;


    case 'NO':
    case 'N':
        console.log('Wrong answer');
        alert("Wrong answer");
        break;  
}


let Q3 = prompt('2 is 10 in binary?');

switch (Q3.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Correct answer ');
        alert("correct answer");
        score++;
        break;

    case 'NO':
    case 'N':
        console.log('Wrong answer');
        alert("Wrong answer");
        break 
}



let Q4 = prompt('In binary, is the answer of the following question correct  10+1000=1010?');

switch (Q4.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('Correct answer ');
        alert("correct answer");
        score++;
        break;


    case 'NO':
    case 'N':
        console.log('Wrong answer');
        alert("Wrong answer");
        break; 
}




let Q5 = prompt('Letters are not converted to binary in a computer like a numbers ?');

switch (Q5.toUpperCase()) {
    case  'NO':
    case  'N' :
       console.log('Correct answer ');
        alert("correct answer");
        score++;
        break;
   

    case 'YES':
    case 'Y':
        console.log('Wrong answer');
        alert("Wrong answer");
        break;
}


let Q6 = prompt('In this question, please, enter a number, Guess the number in the decimal corresponds to this representation in the binary 0100101?');

Q6 = Number(Q6);
console.log(Q6);
let i=0; 
while (i < 4) {
   if(Q6==37) {alert("correct, you are awesome");
   score++;
break; }
      
       else if (Q6 < 37){
   Q6= prompt("No, try to higher number");

} else{
   Q6= prompt("No, try to lower number");
   
}
i++;
}
alert("the correct answer is :37")



   let myfavnum = [99, 65, 9, 100, 55, 8, 4, 5, 25];

   let Q7 = prompt ("last question, Guess my favorite number from this list " + myfavnum);

   Q7 = Number(Q7);
   console.log(Q7);
   let j=0; 
   while (j < 6) {
   if (Q7==25) {alert("correct, you are awesome");
   score++;
break; }
         
         else{
          
                 Q7= prompt("No, you remain " +(5-j)+ " attempts to guess the correct answer, so try again ");
             }
           
          j++;

}
alert("my favorite number is :25")
   
alert("your score is : " + score + ".......You are amazing! thank you " + username );

