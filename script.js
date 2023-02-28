let computerGuess;
let userGuess = [];
let maxGuess;
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let attempts_left = document.getElementById("attempts");
let audio = new Audio("./music/game_music.wav");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  attempts_left.innerHTML = maxGuess;
};

const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

//reload the page
const newGameBegin = () => {
  audio.play();
  setTimeout(() => {
    window.location.reload();
  }, 200);
};

//main logic of our code
const compareGuess = () => {
  audio.play();
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  //check low or high
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = `Your Guess is High 😲`;
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `Your Guess is Low 😒`;
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = `It's Correct 😎, You Won!`;
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber != computerGuess) {
      userGuessUpdate.innerHTML = `Your lose! Correct Number was ${computerGuess}`;
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = `It's Correct 😎, You Won!`;
      userNumberUpdate.value = "";
    }

    startNewGame();
  }

  attempts_left.innerHTML = `${maxGuess - userGuess.length}`;
};

const easyMode = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};
