console.log("take input from user");

var readline1=require('readline-sync');
var name= readline1.question("What is your name?");

var phone= readline1.question("What is your contact Number?");

var email=readline1.question("What is your Email Address?")

var message= readline1.question("Kindly provide feedback");

console.log("User Details");
console.log("Hi "+name+", Congratullation");
console.log("Your account created successfuly followings are the details");
console.log("Email: "+email);
console.log("Phone: "+phone);
console.log("Message: "+message);

console.log("Do you want to send your message?")
var choice=readline1.question("type y for 'yes' and n for 'No'");
if(choice=='y')
    console.log("Message sent successfully")
else if(choice=='n'){
    console.log("Process terminated");
}
else{
    console.log("Please Try again");
}


