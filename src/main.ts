import "./style.css";

// INITIAL SCORE

var initialScore = 0;

// SHOW SCORE FUNCTION

function showScore() {
  const scoreElement = document.getElementById("score");
  if (scoreElement !== null && scoreElement !== undefined) {
    scoreElement.innerHTML = initialScore.toString().padStart(2, "0");
  }
}

// MAIN CALL

showScore();

// ASK FOR ANOTHER CARD - RANDOM FUNCTION

function askCard() {
  const randomValue = Math.floor(Math.random() * 10 + 1);
  if (randomValue <= 7) {
    const cardValue = randomValue;
    console.log(cardValue);
    showCard(cardValue);
    addScore(cardValue);
  }
  if (randomValue > 7) {
    const cardValue = randomValue + 2;
    console.log(cardValue);
    showCard(cardValue);
    addScore(cardValue);
  }
}

// ASK FOR ANOTHER CARD - BTN FUNCTION

const BtnAskCard = document.getElementById("askCard");
if (
  BtnAskCard !== null &&
  BtnAskCard !== undefined &&
  BtnAskCard instanceof HTMLButtonElement
) {
  BtnAskCard.addEventListener("click", askCard);
}

// SHOW ANOTHER CARD

// function showCard(cardValue: number) {
//   const imgElement = document.getElementById("newCard");
//   if (cardValue === 1 && imgElement !== null && imgElement !== undefined) {
//     imgElement.setAttribute(
//       "src",
//       "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
//     );
//   }
// }

function showCard(cardValue: number) {
  const imgElement = document.getElementById("newCard");
  if (imgElement !== null && imgElement !== undefined) {
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

function addScore(cardValue: number) {
  const userScore = (document.getElementById("score") as HTMLDivElement)
    .innerText;
  if (cardValue <= 7) {
    const newScore = parseInt(userScore) + cardValue;
    const scoreElement = document.getElementById("score");
    if (scoreElement !== null && scoreElement !== undefined) {
      scoreElement.innerHTML = newScore.toString();
    }
  } else if (cardValue > 7) {
    const newScore = parseInt(userScore) + 0.5;
    const scoreElement = document.getElementById("score");
    if (scoreElement !== null && scoreElement !== undefined) {
      scoreElement.innerHTML = newScore.toString();
    }
  }
}
