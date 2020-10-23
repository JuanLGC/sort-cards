/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {};

let numbers = [];
let symbols = [];

window.drawCards = function drawCards() {
  let number = document.querySelector("input").value;
  let card = document.querySelector("#card");
  let midSection = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Q",
    "J",
    "K"
  ];

  let inicio = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let sort = document.querySelector("#sort");
  sort.innerHTML = "";
  card.innerHTML = "";
  numbers = [];
  symbols = [];
  for (let i = 0; i < number; i++) {
    let inicioNumero = Math.floor(Math.random() * inicio.length);
    let numberCard = Math.floor(Math.random() * 13);

    let finalNumber = midSection[numberCard];
    let FinalSymbol = inicio[inicioNumero];
    if (finalNumber == "A") {
      numbers.push(1);
    } else if (finalNumber == "J") {
      numbers.push(11);
    } else if (finalNumber == "Q") {
      numbers.push(12);
    } else if (finalNumber == "K") {
      numbers.push(13);
    } else {
      numbers.push(parseInt(finalNumber));
    }
    symbols.push(FinalSymbol);

    let color = "black";

    if (FinalSymbol == "&hearts;" || FinalSymbol == "&diams;") {
      color = "red;";
    }

    card.insertAdjacentHTML(
      "afterbegin",
      `<div class="bg-white rounded  full-card" id="card">
          
            <div class="card-width card-top-color" id="inicio">
              <p id="symbol-top" style="color: ${color}">${FinalSymbol}</p>
            </div>
          
          
            <div
              class="card-width card-number"
              id="medio"
            >
              <p id="medioSimbolo" style="color: ${color}">${finalNumber}</p>
            </div>
          

          
            <div class="card-width card-bottom-color">
              <p id="finalSimbolo" style="transform: rotate(180deg); color: ${color}">${FinalSymbol}</p>
            </div>
          
        </div>`
    );
  }
  numbers = numbers.reverse();
  symbols = symbols.reverse();
};

window.sortCards = function sortCards() {
  let color = "black";
  let len = numbers.length;

  sort.innerHTML = "";
  for (var i = 0; i < len; i++) {
    sort.innerHTML =
      sort.innerHTML +
      `<div class=" container" >
    <div class="row" >
    <div class=" d-flex box" id="H${i}">
    <h1 class="bubble-sort-iteration">${i}</h1></div></div></div>`;

    let newIteration = document.querySelector(`#H${i}`);
    for (var j = len - 1; j >= 0; j--) {
      color = "black";
      if (numbers[j] > numbers[j - 1]) {
        let tmp = numbers[j];
        let tmp1 = symbols[j];
        numbers[j] = numbers[j - 1];
        symbols[j] = symbols[j - 1];
        numbers[j - 1] = tmp;
        symbols[j - 1] = tmp1;
      }

      let cardNumber = numbers[j];

      if (cardNumber == 11) {
        cardNumber = "J";
      } else if (cardNumber == 12) {
        cardNumber = "Q";
      } else if (cardNumber == 13) {
        cardNumber = "K";
      } else if (cardNumber == 1) {
        cardNumber = "A";
      }

      if (symbols[j] == "&hearts;" || symbols[j] == "&diams;") {
        color = "red";
      }

      newIteration.innerHTML =
        newIteration.innerHTML +
        `
        <div class="bg-white rounded  full-card" id="card">
            <div class="card-width card-top-color" id="inicio">
              <p id="symbol-top" style="color: ${color}">${symbols[j]}</p>
            </div>          
            <div
              class="card-width card-number"
              id="medio"
            >
              <p id="medioSimbolo" style="color: ${color}">${cardNumber}</p>
            </div>          
            <div class="card-width card-bottom-color">
              <p id="finalSimbolo" style="transform: rotate(180deg); color: ${color}">${symbols[j]}</p>
            </div>
        </div>`;
    }
  }
};
