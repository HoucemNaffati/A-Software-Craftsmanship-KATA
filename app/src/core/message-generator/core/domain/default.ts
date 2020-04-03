import {MessageGenerator} from "./message-generator.contract";

export class DefaultMessageGenerator implements MessageGenerator {
	constructor(private readonly time: Date) {
	}
	
	generate(): string {
		return this.time.getSeconds().toString();
	}
	
	isValidRule(time: Date): boolean {
		return true;
	}
	
}