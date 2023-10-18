var paintWalls = function (cost, time) {
	const n = cost.length;
	const memo = Array.from({ length: n }, () => Array(n + 1).fill(-1));

	function solve(idx, remaining) {
		if (remaining <= 0) return 0;

		if (idx === n) return Infinity;

		if (memo[idx][remaining] !== -1) return memo[idx][remaining];

		const paint = cost[idx] + solve(idx + 1, remaining - 1 - time[idx]);
		const dontPaint = solve(idx + 1, remaining);

		memo[idx][remaining] = Math.min(paint, dontPaint);
		return memo[idx][remaining];
	}
	return solve(0, cost.length);
};
const cost = [1, 2, 3, 2];
const time = [1, 2, 3, 2];

console.log(paintWalls(cost, time));
