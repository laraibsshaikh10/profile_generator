const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//questions to ask the user
const questions = ["What's your name?", "What's your favourite activity?", "What kind of music do you like?", "Who is your favourite author?"];

//to store answers, create an array
const answers = [];

function askQuestions(index) {
  r1.question(questions[index], (answer) => {
    answers.push(answer);

    //once all questions have been asked, generate profile and exit
    if(index === questions.length - 1) {
      generateProfile();
      r1.close();
    } else {
      askQuestions(index + 1);
    }
  });
}

//function to generate profile based on the answers obtained
function generateProfile() {
  console.log("\nProfile Information:");
  console.log(`Name: ${answers[0]}`);
  console.log(`Favorite Activity: ${answers[1]}`);
  console.log(`Favorite Music: ${answers[2]}`);
  console.log(`Favourite Author: ${answers[3]}`);
}

askQuestions(0);
askQuestions(1);
askQuestions(2);
askQuestions(3);


// rl.question("What do you think of Node.js? ", (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });