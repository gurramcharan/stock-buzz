var input = require("readline-sync");

var wel = input.question("What is your name? ");
console.log("Welcome! " + wel + " Lets see your view about stock market....\n");
console.log("Type the option number alone\n");

var score = 0;
function play(ques,answer){
  var userans = input.question(ques);

  if(userans === answer){
    console.log("You are right!!");
    score++;
  }else{
    console.log("Wrong move🙃");

  }
   console.log("Your Score is: ",score,"\n");
}

var ques1 ={
  question: "What is the costliest stock in India?\n1) MRF \n2) Nestle \nAnswer:- ",
  answer: "1"
}

var ques2 ={
  question: "The Indian Stock Market is regulated by?\n1) RBI \n2) GOI \n3) SEBI \nAnswer:- ",
  answer: "3"
}

var ques3 ={
  question: "The Largest Stock Market in India?\n1) NSE \n2) BSE \n3) DSE \nAnswer:-  ",
  answer: "2"
}

var ques4 ={
  question: "Share holders are the...?\n1) Employees of the company \n2) Owners of the company \n3) Workers of the company \nAnswer:-   ",
  answer: "2"
}

var ques5 ={
  question: "The term Bullish Indicates?\n1) Positive Price \n2) Negative Price \n3) Neutral Price \nAnswer:-   ",
  answer: "1"
}

var ques6 ={
  question: "What is the expansion of SENSEX?\n1) Sensitive index of bombay stock exchange  \n2) Indian sectorial index \n3) Government \nAnswer:-   ",
  answer: "1"
}
  
var ques7 ={
  question: "NIFTY carries?\n1) Top 50 companies  \n2) Top 100 companies \n3) Top 50 companies on NSE  \nAnswer:-   ",
  answer: "3"
}
  
var ques8 ={
  question: "The process of issuing share to the public is called?\n1) Rights issue \n2) Bonus issue \n3) IPO \nAnswer:-   ",
  answer: "3"
}
  
var ques9 ={
  question: "The Stock Mrket trading time in India?\n1) 9am to 5pm \n2) 10am to 12pm \n3) 9am to 3:30pm \nAnswer:-   ",
  answer: "3"
}

var ques10 ={
  question: "Indian Stock Markets Movements are influenced by?\n1) Global Factors \n2) Domestic Factors \n3) All of the above \nAnswer:-   ",
  answer: "3"
}

var questions = [ques1,ques2,ques3,ques4,ques5,ques6,ques7,ques8,ques9,ques10];



for (var i=0;i<questions.length;i++)
{
  currentques= questions[i];
  play(currentques.question, currentques.answer);
}
 
if(score === 5){
    console.log("Congoos!! You have a good move about market...Keep it up ✨✨")
  }
  else if(score === 4){
    console.log("You did great but missed with single wrong move🙂")
  }
  else if(score === 1,2,3){
    console.log("You're doing great but you need some more knowledge to keep your score up.😇")
  }
  else{
    console.log("No Problem! Spare some time and start learning about stock market. It's really helpful")
  }


console.log("\nTop Scorers:-");
console.log("Ajitha");
console.log("Anil");
console.log("\n____________________________________");
console.log("If you are top scorer inform charan with screenshot. He will update💫💫");
console.log("Thanks for participating");
console.log("____________________________________");