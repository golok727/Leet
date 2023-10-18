function findRoot(n, leftChild, rightChild) {
	const set = new Set([...leftChild, ...rightChild]);
	for (let i = 0; i < n; i++) {
		if (!set.has(i)) {
			return i;
		}
	}

	return -1;
}
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
	const root = findRoot(n, leftChild, rightChild);
	if (root === -1) {
		return false;
	}

	const seen = new Set();
	const stack = [];
	seen.add(root);
	stack.push(root);

	while (stack.length > 0) {
		const node = stack.pop();

		const children = [leftChild[node], rightChild[node]];
		for (const child of children) {
			if (child === -1) continue;

			if (seen.has(child)) {
				return false;
			}
			stack.push(child);
			seen.add(child);
		}
	}

	return seen.size === n;
};

let n = 4,
	leftChild = [1, -1, 3, -1],
	rightChild = [2, -1, -1, -1];

console.log(validateBinaryTreeNodes(n, leftChild, rightChild));
