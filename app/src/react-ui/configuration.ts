import {GenrateTimedMessage} from "../core/message-generator/core/use-case/generate-timed-message";
import {NativeClock} from "../adapters/native-clock";
import {NativeRandomNumberPicker} from "../adapters/native-random-number-picker";

export class Injector {
	static MessageGeneratorContext = class {
		static makeGenerateTimedMessageUseCase(): GenrateTimedMessage {
			const clock = new NativeClock();
			const randomNumberPicker = new NativeRandomNumberPicker();
			return new GenrateTimedMessage(clock, randomNumberPicker);
		}
	}
}