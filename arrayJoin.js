/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
	const mergedObjects = {};
	for (const item of arr1) {
		mergedObjects[item.id] = mergedObjects[item.id] || {};
		Object.assign(mergedObjects[item.id], item);
	}
	for (const item of arr2) {
		mergedObjects[item.id] = mergedObjects[item.id] || {};
		Object.assign(mergedObjects[item.id], item);
	}

	const joinedArr = Object.values(mergedObjects);
	joinedArr.sort((a, b) => a.id - b.id);
	return joinedArr;
};

let arr1 = [
	{ id: 1, x: 2, y: 3 },
	{ id: 2, x: 3, y: 6 },
];
let arr2 = [
	{ id: 2, x: 10, y: 20 },
	{ id: 3, x: 0, y: 0 },
];

// arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
// arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

console.log(join(arr1, arr2));
