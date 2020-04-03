import {RandomNumberPicker} from "../core/message-generator/core/ports/random-number-picker";

export class InMemoryRandomNumberPicker implements RandomNumberPicker{
	constructor(private readonly deterministicNumber:number|undefined) {
	}
	generate(): number {
		if(this.deterministicNumber)
			return this.deterministicNumber;
		return 1;
	}
}