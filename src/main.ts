import "./style.css";

// INITIAL SCORE + RULES

let userScore: number = 0;

const maxScore: number = 7.5;

/* const maxScore = 7.5;
 */

// SHOW SCORE FUNCTION

const showScore = () => {
  const scoreElement = document.getElementById("score");
  if (scoreElement && scoreElement instanceof HTMLHeadingElement) {
    scoreElement.textContent = userScore.toString().padStart(2, "0");
  }
};

document.addEventListener("DOMContentLoaded", showScore);

// GENERATE RANDOM CARD/VALUE
const generateRandomCard = () => {
  const randomValue = Math.floor(Math.random() * 10 + 1);
  if (randomValue <= 7) {
    const cardNumber: number = randomValue;
    showCard(cardNumber);
    addingScore(cardNumber);
    console.log(cardNumber);
  } else {
    const cardNumber: number = randomValue + 2;
    showCard(cardNumber);
    addingScore(cardNumber);
    console.log(cardNumber);
  }
};

// SHOW RANDOM CARD
function showCard(cardValue: number) {
  const imgElement = document.getElementById("newCard");
  if (imgElement) {
    switch (cardValue) {
      case 1:
        imgElement.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
        );
        break;
      case 2:
        imgElement.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
        );
        break;
      case 3:
        imgElement.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
        );
        break;
      case 4:
        imgElement.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
        );
        break;
      case 5:
        imgElement.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
        );
        break;
      case 6:
        imgElement.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
        );
        break;
      case 7:
        imgElement.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
        );
        break;
      case 10:
        imgElement.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
        );
        break;
      case 11:
        imgElement.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
        );
        break;
      case 12:
        imgElement.setAttribute(
          "src",
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
        );
        break;
    }
  }
}

const addingScore = (cardType: number) => {
  if (cardType <= 7) {
    userScore = userScore + cardType;
  } else {
    userScore = userScore + 0.5;
  }
};

// ASK FOR ANOTHER CARD - FUNCTION
const askAnotherCard = () => {
  generateRandomCard();
  showScore();
  gameOver();
};

// ASK FOR ANOTHER CARD - BUTTON
const btnAskCard = document.getElementById("askAnotherCard");
if (btnAskCard && btnAskCard instanceof HTMLButtonElement) {
  btnAskCard.addEventListener("click", askAnotherCard);
}

const disableButton = () => {
  if (btnAskCard && btnAskCard instanceof HTMLButtonElement) {
    btnAskCard.disabled = true;
  }
  if (btnResign && btnResign instanceof HTMLButtonElement) {
    btnResign.disabled = true;
  }
  if (btnNewGame && btnNewGame instanceof HTMLButtonElement) {
    btnNewGame.style.display = "block";
  }
};

const gameOver = () => {
  const gameOverElement = document.getElementById("gameOver");
  if (
    gameOverElement &&
    gameOverElement instanceof HTMLParagraphElement &&
    userScore > maxScore
  ) {
    gameOverElement.textContent = "GAME OVER";
    disableButton();
  }
};

const iResign = () => {
  const resignTextElement = document.getElementById("resignText");
  if (resignTextElement && resignTextElement instanceof HTMLParagraphElement) {
    switch (true) {
      case userScore <= 4:
        resignTextElement.textContent = "Has sido muy conservador";
        break;
      case userScore > 4 && userScore < 6:
        resignTextElement.textContent = "Te ha entrado el canguelo eh?!";
        break;
      case userScore > 5 && userScore < 7.5:
        resignTextElement.textContent = "...Casi casi...";
        break;
      case userScore > 7 && userScore <= 7.5:
        resignTextElement.textContent = "¡Lo has clavado!¡Enhorabuena!";
        break;
    }
  }
  disableButton();
};

// RESIGN - BUTTON
const btnResign = document.getElementById("btnResign");
if (btnResign && btnResign instanceof HTMLButtonElement) {
  btnResign.addEventListener("click", iResign);
}

// NEW GAME - FUNCTION
const newGame = () => {
  location.reload();
};

// NEW GAME - BUTTON
const btnNewGame = document.getElementById("btnNewGame");
if (btnNewGame && btnNewGame instanceof HTMLButtonElement) {
  btnNewGame.addEventListener("click", newGame);
}
