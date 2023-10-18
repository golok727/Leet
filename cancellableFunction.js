/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
	let cancelled = false;
	const promise = async () => {
		let next = generator.next();
		while (!next.done) {
			try {
				let nextValue = await next.value;
				next = cancelled
					? generator.throw("Cancelled")
					: generator.next(nextValue);
			} catch (error) {
				next = generator.throw(error);
			}
		}
		return next.value;
	};

	return [() => (cancelled = true), promise()];
};
