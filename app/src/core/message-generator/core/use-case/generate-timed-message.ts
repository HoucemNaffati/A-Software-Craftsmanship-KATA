import {Clock} from "../ports/clock";
import {RandomNumberPicker} from "../ports/random-number-picker";
import {MessageGeneratorFactory} from "../domain/message-generator.factory";
import {RandomValueOutOfBound} from "../domain/RandomValueOutOfBound";

export class GenerateTimedMessage {
	
	constructor(private readonly clock: Clock, private readonly randomNumberPicker: RandomNumberPicker) {}
	
	execute(presenter: TimedMessagePresenter) {
		const message = this.generateMessage();
		presenter.setMessage(message);
		presenter.setTime(this.clock.getTime());
	}
	
	private generateMessage() {
		const randomValue = this.randomNumberPicker.generate();
		this.validateRandomValue(randomValue);
		return new MessageGeneratorFactory(randomValue)
			.of(this.clock.getTime())
			.generate();
	}
	
	private validateRandomValue(randomValue: number) {
		if(randomValue<1||randomValue>10)
			throw new RandomValueOutOfBound();
	}
}

export interface TimedMessagePresenter {
	setTime(time: Date): void;
	setMessage(message: string): void;
}