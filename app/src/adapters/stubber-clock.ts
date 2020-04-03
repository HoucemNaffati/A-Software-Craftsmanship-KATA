import {Clock} from "../core/message-generator/core/ports/clock";

export class StubbedClock implements Clock {
	private clock: Date = new Date(2020, 3, 26, 0, 0, 0);
	
	getTime(): Date {
		return this.clock;
	}
	
	setTime(time: Date) {
		this.clock = time;
	}
}