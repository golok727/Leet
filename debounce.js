var debounce = function (fn, t) {
	let timeout;
	return function (...args) {
		if (timeout !== undefined) clearTimeout(timeout);

		timeout = setTimeout(() => {
			fn(...args);
		}, t);
	};
};
const log = (...args) => {
	console.log(...args);
};

const logger = debounce(log, 1000);

logger("hello");
logger("hello");

setTimeout(() => logger("world"), 2000);
