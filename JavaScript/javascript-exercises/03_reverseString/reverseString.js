const reverseString = function(string) {
	const len = string.length;
	let reversed = "";
	let i = 0;
	let j = len - 1;

	while (i < len) {
		reversed += string[j];
		i++;
		j--;
	}
//	console.log(reversed);
	return reversed;
};

// Do not edit below this line
module.exports = reverseString;
