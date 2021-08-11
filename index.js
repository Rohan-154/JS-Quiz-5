var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score=0;

console.log(chalk.blue(" The JavaScript Wizard Quiz 🏏"));
console.log(chalk.green("--------------------------"))
var userName = readlineSync.question("Please enter your good name! \n");
console.log("Welcome " + chalk.green(userName)+ "\n");
console.log("Lets Jump In!(Select only option(A or B)) ");

function quiz(quizzes) {
  var latest = quizzes;
  // console.log(latest);
  var user = readlineSync.question("Q: " + latest.q +"\n" + latest.option1 +"\n"+ latest.option2+ "\n");
  if (user.toUpperCase() == latest.a.toUpperCase()) {
    score++;
    console.log(chalk.green("Correct answer! "));
  } else {
    console.log(chalk.red("Wrong answer! "));
  }
}


var questions = [{
  q: "What is the correct JavaScript syntax to print “DataFlair” in the console? ",
  option1: "A:  print(“DataFlair”);",
  option2: "B: console.print(“DataFlair”);",
  a: "B",
},
{
  q: "Which method will you use to round the number 24.76 to the nearest integer? ",
  option1: "A: Math.round(24.76);",
  option2: "B: Math.rnd(24.76);",
  a: "A",
},
{
  q: "Which of the following statements will show a message as well as ask for user input in a popup? ",
  option1: "A: prompt()",
  option2: "B:  alert()",
  a: "A",
},
{
  q: "Which of the following is an event listener in JavaScript? ",
  option1: "A: Click()",
  option2: "B:  click",
  a: "B",
},
{
  q: "Which of the given options is an incorrect variable name? ",
  option1: "A:  $javascript",
  option2: "B:  -javascript",
  a: "B",
},
];
for (var i = 0; i < questions.length; i++) {

  quiz(questions[i]);
}
console.log("Your final score is: " + chalk.red(score));
// var leaderboard=[{
//    name:" Komal " ,
//    scoreLeader: '1',
// }]
console.log(chalk.cyan("****LEADERBOARD**** /n" ));
console.log(chalk.red("NOTE:-SEND SS TO UPDATE LEADERBOARD"));
var nameLeader= "Komal"
var scoreLeader= "4"
console.log(chalk.cyan("1. Name:" + nameLeader  ));
console.log(chalk.cyan("     Score:" + scoreLeader ))


