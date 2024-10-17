const repeatString = function(word, times) {
	let i = 0;
	let string = "";
	while (i < times) {
		string += word;
		i++;
	}
	return string;
};

// Do not edit below this line
module.exports = repeatString;
