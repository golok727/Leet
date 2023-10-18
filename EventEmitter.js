class EventEmitter {
	events = new Map();

	/**
	 * @param {string} eventName
	 * @param {Function} callback
	 * @return {Object}
	 */

	subscribe(eventName, callback) {
		if (this.events.has(eventName)) {
			this.events.get(eventName).push(callback);
		} else {
			this.events.set(eventName, [callback]);
		}

		return {
			unsubscribe: () => {
				const events = this.events.get(eventName);
				const callbackIdx = events.indexOf(callback);
				events.splice(callbackIdx, 1);
			},
		};
	}

	/**
	 * @param {string} eventName
	 * @param {Array} args
	 * @return {Array}
	 */
	emit(eventName, args = []) {
		if (!this.events.has(eventName)) return [];

		const evtCallbacks = this.events.get(eventName);
		return evtCallbacks.reduce((acc, cb) => {
			acc.push(cb(...args));
			return acc;
		}, []);
	}
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
	return 99;
}

const sub = emitter.subscribe("onClick", onClickCallback);
// const sub2 = emitter.subscribe("onClick", () => 10);

console.log(emitter.emit("onClick")); // [99]
console.log(sub.unsubscribe()); // undefined
console.log(emitter.emit("onClick")); // []
