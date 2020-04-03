import {MessageGenerator} from "./message-generator.contract";
import {FizzBuzz} from "./fizz-buzz";
import {Fizz} from "./fizz";
import {Buzz} from "./buzz";
import {Happy} from "./happy";
import {DefaultMessageGenerator} from "./default";

export class MessageGeneratorFactory {
	private readonly strategies: MessageGenerator[];
	
	constructor(private readonly randomValue: number) {
		this.strategies = [new Happy(randomValue), new FizzBuzz(), new Fizz(), new Buzz()];
	}
	
	of(time: Date): MessageGenerator {
		const messageGenerator = this.strategies.find(messageGenerator => messageGenerator.isValidRule(time));
		if (messageGenerator)
			return messageGenerator;
		return new DefaultMessageGenerator(time);
	}
	
}