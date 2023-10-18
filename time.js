class TimeLimitedCache {
	constructor() {
		this.cache = new Map();
	}
	set(key, value, duration) {
		const found = this.cache.has(key);
		if (found) {
			clearTimeout(this.cache.get(key).timeout);
		}

		this.cache.set(key, {
			value,
			timeout: setTimeout(() => this.cache.delete(key), duration),
		});
		return found;
	}
	get(key) {
		return this.cache.get(key)?.value ?? -1;
	}
	count() {
		return this.cache.size;
	}
}

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
