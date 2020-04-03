import {useEffect, useState} from "react";
import {TimedMessagePresenter} from "../../core/message-generator/core/use-case/generate-timed-message";
import {Injector} from "../configuration";

const INIT_MESSAGE = 'CONFIGURING...';

export function useMessageGenerator(): { message: string; time: Date } {
	const [time, setTime] = useState<Date>(new Date());
	const [message, setMessage] = useState<string>(INIT_MESSAGE);
	
	useEffect(() => {
		const timer = setInterval(() => {
			const generateTimedMessage = Injector.MessageGeneratorContext.makeGenerateTimedMessageUseCase()
			const presenter = new SimpleTimedMessagePresenter();
			generateTimedMessage.execute(presenter);
			setTime(presenter.getTime());
			setMessage(presenter.getMessage());
		}, 1000);
		return () => clearInterval(timer);
	}, []);
	
	return {
		message: message,
		time: time
	};
}

class SimpleTimedMessagePresenter implements TimedMessagePresenter {
	private message: string = '';
	private time: Date = new Date(2020, 3, 26, 0, 0, 0);
	
	setMessage(message: string): void {
		this.message = message;
	}
	
	setTime(time: Date): void {
		this.time = time;
	}
	
	getMessage() {
		return this.message;
	}
	
	getTime() {
		return this.time;
	}
}