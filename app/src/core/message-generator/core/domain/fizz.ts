import {MessageGenerator} from "./message-generator.contract";
import {MessageType} from "./message-type.type";

export class Fizz implements MessageGenerator {
	
	generate(): string {
		return MessageType.FIZZ;
	}
	
	isValidRule(time: Date): boolean {
		return time.getSeconds() % 3 === 0;
	}
	
}
