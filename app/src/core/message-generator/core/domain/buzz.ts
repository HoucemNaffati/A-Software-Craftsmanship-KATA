import {MessageGenerator} from "./message-generator.contract";
import {MessageType} from "./message-type.type";

export class Buzz implements MessageGenerator {
	
	generate(): string {
		return MessageType.BUZZ;
	}
	
	isValidRule(time: Date): boolean {
		return time.getSeconds() % 5 === 0;
	}
	
}