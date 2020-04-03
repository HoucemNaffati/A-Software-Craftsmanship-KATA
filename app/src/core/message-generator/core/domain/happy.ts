import {MessageGenerator} from "./message-generator.contract";
import {RandomNumberPicker} from "../ports/random-number-picker";
import {MessageType} from "./message-type.type";

export class Happy implements MessageGenerator {
	
	constructor(private readonly randomNumberPicker: RandomNumberPicker) {
	}
	
	generate(): string {
		if (this.randomNumberPicker.generate() === 7)
			return MessageType.HAPPY;
		return MessageType.UNHAPPY;
	}
	
	isValidRule(time: Date): boolean {
		const timeElement = time.getSeconds();
		if (timeElement !== 0)
			return timeElement % 10 === 0;
		return false;
	}
	
}