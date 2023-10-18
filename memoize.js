function memoize(fn) {
	const cache = new Map();

	function find(...args) {
		let node = cache;
		for (let arg of args) {
			if (!node.has(arg)) node.set(arg, new Map());
			node = node.get(arg);
		}
		if (node.has("value")) {
			return node.get("value");
		} else {
			const val = fn(...args);
			node.set("value", val);
			return val;
		}
	}

	return function (...args) {
		return find(...args);
	};
}

let callCount = 0;
let memoizedFn = memoize(function (a, b) {
	callCount += 1;
	return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log({ callCount }); // 1

callCount = 0;
memoizedFn = memoize((a, b) => {
	callCount++;
	return a.join(" ") + " " + b.join(" ");
});
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(memoizedFn(a, b)); // 5
console.log(memoizedFn(a, b)); // 5
// console.log(memoizedFn(["Radhey Shyam"], ["Radhey Radhey"])); // 5
console.log({ callCount }); // 1
