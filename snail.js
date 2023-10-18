Array.prototype.snail = function (rowsCount, colsCount) {
	if (rowsCount * colsCount !== this.length) return [];
	const result = Array.from({ length: rowsCount }, () =>
		Array.from({ length: colsCount }).fill(0)
	);
	console.log(result);
	let i = 0;
	let row = 0;
	let col = 0;
	const UP = -1;
	const DOWN = 1;

	let dir = DOWN;

	while (i < this.length) {
		result[row][col] = this[i];
		i++;
		if (dir === DOWN) {
			if (row < rowsCount - 1) {
				row++;
			} else {
				col++;
				dir = UP;
			}
		} else {
			console.log(row);
			if (row > 0) {
				row--;
			} else {
				col++;
				dir = DOWN;
			}
		}
	}

	return result;
};
Array.prototype.snail = function (rows, cols) {
	if (rows * cols !== this.length) return [];
	let res = Array.from({ length: rows }, () => []);

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			const idx = i & 1 ? rows - j - 1 : j;
			const val = this[i * rows + j];
			res[idx].push(val);
		}
	}
	return res;
};

const nums = [
	19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
const rowsCount = 5;
const colsCount = 4;

const snailResult = nums.snail(rowsCount, colsCount);
console.log(snailResult);
