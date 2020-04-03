import {RandomNumberPicker} from "../core/message-generator/core/ports/random-number-picker";

export class NativeRandomNumberPicker implements RandomNumberPicker {
	generate(): number {
		return Math.ceil(Math.random() * 9 + 1);
	}
}