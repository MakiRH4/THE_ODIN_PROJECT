console.log("Hello World!")
console.log("This is Rock, Paper, Scissors!!!")

function	getComputerChoice() {
	let choice = Math.random();
	console.log(choice);
	
	if (choice <= 0.33) {
		console.log("Stein!");
		return "Stein";
	} else if (choice > 0.33 && choice <= 0.66) {
		console.log("Papier!");
		return "Stein";
	} else {
		console.log("Schere");
		return "Stein";
	}
}
getComputerChoice();

function	getHumanChoice() {
	return prompt("What's your choice, human?!");
}
getHumanChoice();