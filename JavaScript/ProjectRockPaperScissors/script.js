console.log("Hello World!")
console.log("This is Rock, Paper, Scissors!!!")
let humanScore = 0;
let computerScore = 0;

function	getComputerChoice() {
	let choice = Math.random();
//	console.log(choice);
	
	if (choice <= 0.33) {
		console.log("Stein!");
		return "stein";
	} else if (choice > 0.33 && choice <= 0.66) {
		console.log("Papier!");
		return "papier";
	} else {
		console.log("Schere");
		return "schere";
	}
}

function	getHumanChoice() {
	const prompt = require('prompt-sync')();
	console.log("What's your choice, human?!");
	return prompt();
}

function playGame() {
	const humanChoice = getHumanChoice().toLowerCase();
	const computerChoice = getComputerChoice().toLowerCase();

	if (humanChoice == computerChoice) {
		console.log("Unentschieden!");
		return "Unentschieden!";
	} else if (humanChoice == "papier" && computerChoice == "stein") {
		humanScore++;
		console.log("Mensch gewinnt!");
		return "Mensch gewinnt!";
	} else if (humanChoice == "stein" && computerChoice == "scheren") {
		console.log("Mensch gewinnt!");
		humanScore++;
		return "Mensch gewinnt!";
	} else if (humanChoice == "scheren" && computerChoice == "papier") {
		console.log("Mensch gewinnt!");
		humanScore++;
		return "Mensch gewinnt!";
	} else {
		console.log("Mensch verloren!");
		computerScore++;
		return "Mensch verloren";
	}
}
function theGame() {
	let i = 0;
	while (i < 5) {
		playGame()
		i++;
	}
	console.log("Und der endergebnis ist...")
	console.log("Computer: {} VS Mensch: {}", computerScore, humanScore);
	if (humanScore > computerScore) {
		return console.log("Mensch gewinnt!!");
	}
	else if (computerScore > humanScore) {
		return console.log("Computer gewinnt!!");
	}
	else {
		return console.log("Unentschieden!")
	}
}

theGame();