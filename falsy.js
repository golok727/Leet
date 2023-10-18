const compactObject = (obj) => {
	if (!obj) return false;
	if (typeof obj !== "object") return obj;

	if (Array.isArray(obj)) {
		const newArr = [];
		for (let i = 0; i < obj.length; i++) {
			const sub = compactObject(obj[i]);
			if (sub) newArr.push(sub);
		}
		return newArr;
	}

	const newObj = {};
	for (const key in obj) {
		const sub = compactObject(obj[key]);
		if (sub) newObj[key] = sub;
	}
	return newObj;
};

console.log(compactObject([null, 0, false, 1]));

console.log(compactObject({ a: null, b: [false, 1] }));

console.log(compactObject([null, 0, 5, [0], [false, 16]]));
