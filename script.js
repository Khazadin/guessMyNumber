//function expression
"use strict";
const input = document.getElementById("inp");
const btn = document.getElementById("btn");
const agn = document.getElementById("agn");
const info = document.getElementById("info");
const hs = document.getElementById("hs");
const trial = document.getElementById("trial");
const main = document.querySelector(".main");

let number;
let numberGenerator = (max) => {
  number = Math.trunc(Math.random() * max) + 1;
  console.log(number);
};
numberGenerator(10);
let ctNumber = 0;
let counter = () => {
  let value = Number(input.value);
  if (value > 10 || value < 1) {
    ctNumber = ctNumber;
  } else {
    ctNumber += 1;
    trial.innerHTML = String(ctNumber);
    console.log(ctNumber);
  }
};
let score = 0;
let hsCheck = () => {
  if (score === 0) {
    score = ctNumber;
    hs.innerHTML = score;
  } else if (score > ctNumber) {
    score = ctNumber;
    hs.innerHTML = score;
  } else {
    score = score;
    hs.innerHTML = score;
  }
};
agn.addEventListener("click", () => {
  numberGenerator(10);
  main.style.backgroundColor = "rgb(19,19,19)";
  trial.innerHTML = 0;
  ctNumber = 0;
  info.innerHTML = "Your Guess is...";
  input.value = "";
});

btn.addEventListener("click", () => {
  counter();
  let value = Number(input.value);
  if (value > 10 || value < 1) {
    info.innerHTML = "Your guess must be in range of 1 to 10";
    main.style.backgroundColor = "purple";
  } else if (value == number) {
    info.innerHTML = "Congrats!!!";
    main.style.backgroundColor = "green";
    hsCheck();
  } else if (value <= number) {
    info.innerHTML = "Make it bigger";
    main.style.backgroundColor = "blue";
  } else if (value >= number) {
    info.innerHTML = "Make it smaller";
    main.style.backgroundColor = "red";
  } else {
    info.innerHTML = "Who knows?";
    main.style.backgroundColor = "orange";
  }
});
