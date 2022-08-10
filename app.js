
let yourName = prompt("Enter Your Name :"); 

let gend = prompt("Enter your Gender" , "male or female" ); 

 let age = prompt("Who old are you ?");
 if(age <= 0)
 {
     alert("Your age invaild");
 }
 
 let result = confirm("Do you want to show a welcoming message ?");

 if(result){
     if(gend == "male"){
         alert("Welcome Mr" + yourName);
     }
     else if(gend == "female"){
         alert("Welcome Ms " / + yourName);
        }
        else{
         alert("Welcome");
     }
 }