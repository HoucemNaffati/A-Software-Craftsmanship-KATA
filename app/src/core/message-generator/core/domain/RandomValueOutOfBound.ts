export class RandomValueOutOfBound extends Error {
	constructor() {
		super();
		this.message = "random value should be an integer in [1,10]"
	}
}