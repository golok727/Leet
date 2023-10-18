Function.prototype.callPolyfill = function (context, ...args) {
	return this.bind(context)(...args);
};

Function.prototype.callPolyfill2 = function (context, ...args) {
	const symbol = Symbol();
	context[symbol] = this;
	const res = context[symbol](...args);
	delete symbol;
	return res;
};

function add(b) {
	return this.a + b;
}

let ans = add.callPolyfill2({ a: 5 }, 7);
console.log(ans);

function tax(price, taxRate) {
	return `The cost of the ${this.item} is ${price * taxRate}`;
}
let args = [{ item: "burger" }, 10, 1.1];
ans = tax.callPolyfill(...args);
console.log(ans);
