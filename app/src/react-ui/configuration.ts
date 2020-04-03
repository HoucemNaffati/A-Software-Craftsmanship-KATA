import {GenerateTimedMessage} from "../core/message-generator/core/use-case/generate-timed-message";
import {NativeClock} from "../adapters/native-clock";
import {NativeRandomNumberPicker} from "../adapters/native-random-number-picker";

export class Injector {
	static MessageGeneratorContext = class {
		static makeGenerateTimedMessageUseCase(): GenerateTimedMessage {
			const clock = new NativeClock();
			const randomNumberPicker = new NativeRandomNumberPicker();
			return new GenerateTimedMessage(clock, randomNumberPicker);
		}
	}
}