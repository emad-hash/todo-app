
let yourName = prompt("Enter Your Name :"); 

let gend = prompt("Enter your Gender"); 

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
 const arr = [];

 let q1 = prompt("Are you a software engineer ?")
 arr[0] = q1
 let q2 = prompt("Are you 25 years old?")
 arr[1] = q2
 let q3 = prompt("are you from jordan ?")
 arr[2] = q3
 
 
 for(let i = 0; i < arr.length; i++)
 {
     switch(arr[i])
     {
         case "Yes" :
         arr[i] = "Yes"
         break;
     
         case "y" :
         arr[i] = "y"
         break;
     
         case "No" :
         arr[i] = "No"
         break;
     
         case "n" :
         arr[i] = "n"
         break;
     
         default : 
         arr[i] = "Invalid"
         break;
     
     }
 
     console.log(arr[i]);
 
 }
 
 let stars = prompt("How many stars you rate the questions ?")
 if(stars == 0)
 {
     alert("Thank you")
 }else if(stars == 1){
     alert("Thank you for *")
 }else if(stars == 2){
     alert("Thank you for **")
 }else if(stars == 3){
     alert("Thank you for ***")
 }else if(stars == 4){
     alert("Thank you for ****")
 }else if(stars == 5){
     alert("Thank you for *****")
 }else{
     alert("Thank you for visiting my site")
 }