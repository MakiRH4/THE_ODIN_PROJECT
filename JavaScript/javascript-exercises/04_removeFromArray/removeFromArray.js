const removeFromArray = function(array, ...args) {
	// let argumentos = Array.from(args);
	// let returned_array = [];
	
	// for (let i = 0; i < array.length; i++) {
	// 	for (let j = 0; j < argumentos.length; j++) {
	// 		if (array[i] == argumentos[j]) {
	// 			delete array[i];
	// 		}
	// 	}
	// }
	
	// for (let k = 0, l = 0; k < array.length; k++) {
	// 	if (array[k] != undefined) {
	// 		returned_array[l] = array[k];
	// 		l++;
	// 	}
	// }
	// return returned_array;
	const newArray = [];
	array.forEach((item) => {
		if (!args.includes(item)) {
			newArray.push(item);
		}
	});
	return newArray;
}

module.exports = removeFromArray;