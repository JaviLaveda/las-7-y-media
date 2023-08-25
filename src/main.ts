import "./style.css";

//initial values

let userScore: number = 0;

const maxScore: number = 7.5;

enum Cards {
  as = 1,
  dos = 2,
  tres = 3,
  cuatro = 4,
  cinco = 5,
  seis = 6,
  siete = 7,
  sota = 10,
  caballo = 11,
  rey = 12,
}

// MOTOR FUNCTIONS

//generate random number
const randomNumber = () => Math.floor(Math.random() * 10 + 1);

//eliminate 8 & 9
const eliminate89 = (value: number) => (value <= 7 ? value : value + 2);

//assing score to card
const assignScore = (value: number) => (value <= 7 ? value : 0.5);

//adding score to userScore
const addingScore = (value: number) => (userScore += value);

// UI INTERFACE FUNCTIONS

// PLAYING GAME*****************************************************************
//showing random card
const showCard = (cardValue: number) => {
  const imgElement = document.getElementById("newCard");
  if (imgElement && imgElement instanceof HTMLImageElement) {
    if (cardValue !== 0) {
      imgElement.setAttribute(
        "src",
        `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/${cardValue}_${Cards[cardValue]}-copas.jpg`
      );
    } else {
      imgElement.setAttribute(
        "src",
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
      );
    }
  } else {
    throw new Error("imgElement not found");
  }
};

//updating score
const showScore = () => {
  const scoreElement = document.getElementById("score");
  if (scoreElement && scoreElement instanceof HTMLHeadingElement) {
    scoreElement.textContent = userScore.toString().padStart(2, "0");
  } else {
    throw new Error("Score element not found");
  }
};

//asking for another card
const askAnotherCard = () => {
  const randomValue = randomNumber();
  const cardNumber = eliminate89(randomValue);
  showCard(cardNumber);
  const cardScore = assignScore(cardNumber);
  addingScore(cardScore);
  showScore();
  checkingStatus();
};

// GAME STATUS*********************************************************************
// checking game status
const checkingStatus = () => {
  if (userScore <= maxScore) {
    keepPlaying();
  } else {
    gameOver();
  }
};

//game over - FUNCTION
const gameOver = () => {
  gameOverMessage();
  disableButton();
  activateNewGame();
};

//game over message
const gameOverMessage = () => {
  const gameOverElement = document.getElementById("status");
  if (gameOverElement && gameOverElement instanceof HTMLParagraphElement) {
    gameOverElement.textContent = "¡GAME OVER!";
  } else {
    throw new Error("gameOverElement not found");
  }
};

//keep playing message
const keepPlaying = () => {
  const keepPlayingElement = document.getElementById("status");
  if (
    keepPlayingElement &&
    keepPlayingElement instanceof HTMLParagraphElement
  ) {
    keepPlayingElement.textContent = "¡Sigue jugando!";
  } else {
    throw new Error("ParagraphElement not found");
  }
};

// RESIGN*************************************************************************

//resigning text
const resignMessage = (score: number) => {
  const resignTextElement = document.getElementById("status");
  if (resignTextElement && resignTextElement instanceof HTMLParagraphElement) {
    if (score <= 4) {
      resignTextElement.textContent = "¡Has sido muy conservador!";
    } else if (score > 4 && score < 6) {
      resignTextElement.textContent = "¡Te ha entrado el canguelo eh!";
    } else if (score > 5 && score < 7.5) {
      resignTextElement.textContent = "¡Uyyy!¡Casi casi!";
    } else if ((score = 7.5)) {
      resignTextElement.textContent = "¡Lo has clavado!¡Enhorabuena!";
    }
  } else {
    throw new Error("resignTextElement not found");
  }
};

//resigning - FUNCTION
const resign = () => {
  hiddingStatusText();
  resignMessage(userScore);
  disableButton();
  activateNewGame();
  activateFutureCardButton();
};

const hiddingStatusText = () => {
  const statusText = document.getElementById("status");
  if (statusText && statusText instanceof HTMLParagraphElement) {
    statusText.textContent = "";
  } else {
    throw new Error("statusText not found");
  }
};

// NEW GAME***********************************************************************

// NEW GAME - FUNCTION
const newGame = () => {
  userScore = 0;
  showScore();
  activateButton();
  hiddingStatusText();
  showCard(0);
  disableFutureButton();
};

// CHECKIN FUTURE STATUS*********************************************************
// checking future game status
const checkingFutureStatus = () => {
  if (userScore > maxScore) {
    futureGameOverMessage();
  }
  if (userScore === 7.5) {
    futureWinMessage();
  }
  if (userScore < 7.5) {
    futureCloseMessage();
  }
};
//future - game over message
const futureGameOverMessage = () => {
  const gameOverElement = document.getElementById("status");
  if (gameOverElement && gameOverElement instanceof HTMLParagraphElement) {
    gameOverElement.textContent = "¡Has hecho bien!¡Habrías perdido!";
  } else {
    throw new Error("gameOverElement not found");
  }
};
//future - win message
const futureWinMessage = () => {
  const futureWinMessageElement = document.getElementById("status");
  if (
    futureWinMessageElement &&
    futureWinMessageElement instanceof HTMLParagraphElement
  ) {
    futureWinMessageElement.textContent = "¡Qué pena!¡Habrías ganado!";
  } else {
    throw new Error("HTMLParagraphElement not found");
  }
};
//future - close message
const futureCloseMessage = () => {
  const futureCloseMessage = document.getElementById("status");
  if (
    futureCloseMessage &&
    futureCloseMessage instanceof HTMLParagraphElement
  ) {
    futureCloseMessage.textContent = "¡Qué pena!¡Estarías más cerca!";
  } else {
    throw new Error("HTMLParagraphElement not found");
  }
};

const futureCard = () => {
  hiddingStatusText();
  const randomValue = randomNumber();
  const cardNumber = eliminate89(randomValue);
  showCard(cardNumber);
  const cardScore = assignScore(cardNumber);
  addingScore(cardScore);
  showScore();
  checkingFutureStatus();
  disableFutureButton();
};

// EVENTS AND BUTTONS FUNCTIONS**************************************************
//BUTTONS - ADDEVENTLISTENERS
const events = () => {
  //asking for another card - BUTTON
  const btnAskCard = document.getElementById("askAnotherCard");
  if (btnAskCard && btnAskCard instanceof HTMLButtonElement) {
    btnAskCard.addEventListener("click", askAnotherCard);
  } else {
    throw new Error("ButtonElement not found");
  }
  //resigning - BUTTON
  const btnResign = document.getElementById("btnResign");
  if (btnResign && btnResign instanceof HTMLButtonElement) {
    btnResign.addEventListener("click", resign);
  } else {
    throw new Error("ButtonElement not found");
  }
  // NEW GAME - BUTTON
  const btnNewGame = document.getElementById("btnNewGame");
  if (btnNewGame && btnNewGame instanceof HTMLButtonElement) {
    btnNewGame.addEventListener("click", newGame);
  } else {
    throw new Error("ButtonElement not found");
  }
  // LAST CARD FUTURE - BUTTON
  const btnFutureCard = document.getElementById("btnFutureCard");
  if (btnFutureCard && btnFutureCard instanceof HTMLButtonElement) {
    btnFutureCard.addEventListener("click", futureCard);
  } else {
    throw new Error("ButtonElement not found");
  }
};

//disabling buttons
const disableButton = () => {
  const btnAskCard = document.getElementById("askAnotherCard");
  if (btnAskCard && btnAskCard instanceof HTMLButtonElement) {
    btnAskCard.disabled = true;
  } else {
    throw new Error("ButtonElement not found");
  }
  const btnResign = document.getElementById("btnResign");
  if (btnResign && btnResign instanceof HTMLButtonElement) {
    btnResign.disabled = true;
  } else {
    throw new Error("ButtonElement not found");
  }
  // const btnFutureCard = document.getElementById("btnFutureCard");
  // if (btnFutureCard && btnFutureCard instanceof HTMLButtonElement) {
  //   btnFutureCard.disabled = true;
  // } else {
  //   throw new Error("ButtonElement not found");
  // }
};
const disableFutureButton = () => {
  const btnFutureCard = document.getElementById("btnFutureCard");
  if (btnFutureCard && btnFutureCard instanceof HTMLButtonElement) {
    btnFutureCard.style.display = "none";
  } else {
    throw new Error("ButtonElement not found");
  }
};
//activating buttons
const activateButton = () => {
  const btnAskCard = document.getElementById("askAnotherCard");
  if (btnAskCard && btnAskCard instanceof HTMLButtonElement) {
    btnAskCard.disabled = false;
  } else {
    throw new Error("ButtonElement not found");
  }
  const btnResign = document.getElementById("btnResign");
  if (btnResign && btnResign instanceof HTMLButtonElement) {
    btnResign.disabled = false;
  } else {
    throw new Error("ButtonElement not found");
  }
  const btnNewGame = document.getElementById("btnNewGame");
  if (btnNewGame && btnNewGame instanceof HTMLButtonElement) {
    btnNewGame.style.display = "none";
  } else {
    throw new Error("ButtonElement not found");
  }
};
const activateNewGame = () => {
  const btnNewGame = document.getElementById("btnNewGame");
  if (btnNewGame && btnNewGame instanceof HTMLButtonElement) {
    btnNewGame.style.display = "block";
  }
};
const activateFutureCardButton = () => {
  const btnFutureCard = document.getElementById("btnFutureCard");
  if (btnFutureCard && btnFutureCard instanceof HTMLButtonElement) {
    btnFutureCard.style.display = "block";
  } else {
    throw new Error("ButtonElement not found");
  }
};

// DOMContentLoaded + Events*****************************************************
document.addEventListener("DOMContentLoaded", function () {
  showScore();
  events();
});
