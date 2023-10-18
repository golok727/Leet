var reduce = function (nums, fn, init) {
	let acc = init;
	for (let i = 0; i < nums.length; i++) acc = fn(acc, nums[i]);
	return acc;
};

const nums = Array(10).fill(10);

console.log(reduce(nums, (acc, curr) => curr + acc, 0));
