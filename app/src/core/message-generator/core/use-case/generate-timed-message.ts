import {Clock} from "../ports/clock";
import {RandomNumberPicker} from "../ports/random-number-picker";
import {MessageGeneratorFactory} from "../domain/message-generator.factory";

export class GenrateTimedMessage {
	
	constructor(private readonly clock: Clock, private readonly randomNumberPicker: RandomNumberPicker) {}
	
	execute(presenter: TimedMessagePresenter) {
		const message = this.generateMessage();
		presenter.setMessage(message);
		presenter.setTime(this.clock.getTime());
	}
	
	private generateMessage() {
		return new MessageGeneratorFactory(this.randomNumberPicker)
			.of(this.clock.getTime())
			.generate();
	}
}

export interface TimedMessagePresenter {
	setTime(time: Date): void;
	setMessage(message: string): void;
}