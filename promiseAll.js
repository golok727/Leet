var promiseAll = async function (functions) {
	return new Promise(async (resolve, reject) => {
		const res = [];
		for (const fn of functions) {
			try {
				const data = await fn();
				res.push(data);
			} catch (error) {
				return reject(error);
			}
		}
		resolve(res);
	});
};

const promise = promiseAll([
	() => new Promise((res) => res(42)),
	() => new Promise((res, re) => res(2)),
]);

promise.then(console.log).catch(console.log); // [42]
