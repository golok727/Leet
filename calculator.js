class Calculator {
	#val = 0;
	constructor(val = 0) {
		this.#val = 0;
	}
	add(val) {
		this.#val += val;
		return this;
	}
	mult(val) {
		this.#val *= val;
		return this;
	}
	sub(val) {
		this.#val -= val;
		return this;
	}
	div(val) {
		this.#val /= val;
		return this;
	}
	pow(power) {
		this.val = Math.pow(this.val, power);
		return this;
	}
	clear() {
		this.val = 0;
		return this;
	}
	set(val) {
		val = val;
		return this;
	}
	get value() {
		return this.#val;
	}
}

const calc = new Calculator();

console.log(calc.add(10).mult(10).sub(10).div(10).pow(2).value);
