let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".images");
let msg = document.querySelector("#msg");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");

// Selecting User's Choice on "Click"
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Generating Computer's Choice (Random)
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);

  //Math.random() chooses a number between 0 and 1 so multiplying it by 3 will give a number between 0 and 3 and Math.floor fnctn will remove the decimal part of that random number so the the genrated random integer will be either 0 or 1 or 2.

  return options[randIdx];
};

// Evaluating Score based on userChoice and compChoice
const playGame = (userChoice) => {
  // Computer's Choice
  let compChoice = genCompChoice();

  //draw-game
  if (userChoice === compChoice) {
    drawGame();
  }

  // winner-selection
  else {
    let userWin = true;
    if (userChoice === "rock") {
      // comp choice = paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // comp choice = rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // comp choice = rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// Draw Game print
const drawGame = () => {
  msg.innerText = "Game was Draw 😵‍💫. Play again.";
  msg.style.backgroundColor = "dodgerblue";
};

// Winner Selection print
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    user_score.innerText = userScore;
    msg.innerText = `You win 🥳! Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    comp_score.innerText = compScore;
    msg.innerText = `You lose😔.Your ${userChoice} lost by ${compChoice}.`;
    msg.style.backgroundColor = "red";
  }
};

// TOGGLING DARK-LIGHT MODE
let body = document.querySelector("body");
let scoreBoard = document.querySelector(".scoreboard");
let mode = document.querySelector("#mode");
let mood = true;

mode.addEventListener("click", () => {
  if (mood) {
    body.style.backgroundColor = "black";
    scoreBoard.style.color = "white"; 
  } else {
    body.style.backgroundColor = "beige";
    scoreBoard.style.color = "black";
  }
  mood = !mood;
});

mode.onmousedown = () => {
  mode.style.cursor = "grabbing";
};
mode.onmouseup = () => {
  mode.style.cursor = "grab";
};
