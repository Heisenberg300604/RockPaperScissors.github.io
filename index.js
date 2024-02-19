// Logic for ROCK,PAPER,SCISSORS GAME !

const choices = ['rock', 'paper', 'scissors'];
const rock = document.querySelector(".image2");
const paper = document.querySelector(".image1");
const scissor = document.querySelector(".image3");
const computer = document.querySelector(".computer");
const heading = document.querySelector(".heading");

function playGame(playerchoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log("computers choice is ",computerChoice);
    if (playerchoice === computerChoice) {
        heading.innerHTML = "it's A TIE !!";
        switch (computerChoice) {
            case "rock":
                computer.src = "rock.webp";
                break;
            case "paper":
                computer.src = "paper.jpg";
                break;
            case "scissors":
                computer.src = "scissors.webp";
                break;
        }
    }
    else {
        switch (playerchoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    computer.src = "scissors.webp";
                    heading.innerHTML = "YOU WIN !!";
                }
                else {
                    heading.innerHTML = "YOU LOOSE !!";
                    computer.src = "paper.jpg";
                }
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    computer.src = "scissors.webp";
                    heading.innerHTML = "YOU LOOSE !!";
                }
                else {
                    heading.innerHTML = "YOU WIN !!";
                    computer.src = "rock.webp";
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    computer.src = "rock.webp";
                    heading.innerHTML = "YOU LOOSE !!";
                }
                else {
                    heading.innerHTML = "YOU WIN !!";
                    computer.src = "paper.jpg";
                }
                break;
        }
    }
}