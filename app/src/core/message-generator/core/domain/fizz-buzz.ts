import {MessageGenerator} from "./message-generator.contract";
import {MessageType} from "./message-type.type";

export class FizzBuzz implements MessageGenerator {
	
	generate(): string {
		return MessageType.FIZZBUZZ;
	}
	
	isValidRule(time: Date): boolean {
		return time.getSeconds() % 15 === 0;
	}
	
}