
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (matrix) {
		let result = [];
		for (var i = 0; i < matrix.length; i++) {
			let item = (i%2 == 0) ? matrix[i] : matrix[i].reverse();
			console.log(item);
			for (var j = 0; j < item.length; j++) {
				result.push(item[j])
			}
		}
		return result;		
	}
	else return [];
}
