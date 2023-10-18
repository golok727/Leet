/**
 *
 * @param {any[]} functions
 * @returns
 */
var compose = function (functions) {
	return function (x) {
		return functions.reduceRight((res, fn) => {
			return fn(res);
		}, x);
	};
};

let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x],
	x = 4;

let c = compose(functions);

console.log(c(4));

(functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]), (x = 1);
let c2 = compose(functions);
console.log(c2(1));

let c3 = compose([]);
console.log(42);
