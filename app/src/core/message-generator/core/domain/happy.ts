import {MessageGenerator} from "./message-generator.contract";
import {MessageType} from "./message-type.type";

export class Happy implements MessageGenerator {
	
	constructor(private readonly randomNValue: number) {
	}
	
	generate(): string {
		if (this.isHappy())
			return MessageType.HAPPY;
		return MessageType.UNHAPPY;
	}
	
	isValidRule(time: Date): boolean {
		const timeElement = time.getSeconds();
		if (timeElement !== 0)
			return timeElement % 10 === 0;
		return false;
	}
	
	private isHappy() {
		return this.randomNValue === 7;
	}
	
}