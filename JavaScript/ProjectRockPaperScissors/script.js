console.log("Hello World!")
console.log("This is Rock, Paper, Scissors!!!")

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
	return prompt("What's your choice, human?!");
}

function gameLogic() {
	const humanChoice = getHumanChoice().toLowerCase();
	const computerChoice = getComputerChoice().toLowerCase();

	if (humanChoice == computerChoice) {
		console.log("Unentschieden!");
		return "Unentschieden!";
	} else if (humanChoice == "papier" && computerChoice == "stein") {
		console.log("Mensch gewinnt!");
		return "Mensch gewinnt!";
	} else if (humanChoice == "stein" && computerChoice == "scheren") {
		console.log("Mensch gewinnt!");
		return "Mensch gewinnt!";
	} else if (humanChoice == "scheren" && computerChoice == "papier") {
		console.log("Mensch gewinnt!");
		return "Mensch gewinnt!";
	} else {
		console.log("Mensch verloren!");
		return "Mensch verloren";
	}
}

gameLogic();