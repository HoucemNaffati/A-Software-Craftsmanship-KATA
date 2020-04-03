import {RandomNumberPicker} from "../core/message-generator/core/ports/random-number-picker";

export class InMemoryRandomNumberPicker implements RandomNumberPicker {
	private deterministicNumber: number = 1;
	
	constructor() {}
	
	setRandomValue(randomValue: number) {
		this.deterministicNumber = randomValue;
	}
	
	generate(): number {
		if (this.deterministicNumber)
			return this.deterministicNumber;
		return 1;
	}
}