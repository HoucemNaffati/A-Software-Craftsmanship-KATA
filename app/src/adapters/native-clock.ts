import {Clock} from "../core/message-generator/core/ports/clock";

export class NativeClock implements Clock {
	
	getTime(): Date {
		return new Date();
	}
	
}