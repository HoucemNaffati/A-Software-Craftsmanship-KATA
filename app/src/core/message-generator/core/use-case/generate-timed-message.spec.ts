import {StubbedClock} from "../../../../adapters/stubber-clock";
import {GenrateTimedMessage, TimedMessagePresenter} from "./generate-timed-message";
import {MessageType} from "../domain/message-type.type";
import {InMemoryRandomNumberPicker} from "../../../../adapters/inmemory-random-number-picker";

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

describe('Unit Test GenrateTimedMessage', () => {
  const presenter = new SimpleTimedMessagePresenter();
  const clock = new StubbedClock();
  
  function verifyTimedMessage(expectedMessage: string) {
    expect(presenter.getTime()).toEqual(clock.getTime());
    expect(presenter.getMessage()).toEqual(expectedMessage);
  }
  
  function configureGenerateTimedMessage(seconds: number, random?:number) {
    clock.setTime(new Date(2020, 3, 26, 0, 0, seconds));
    const inMemoryRandomNumberPicker = new InMemoryRandomNumberPicker(random);
    return new GenrateTimedMessage(clock, inMemoryRandomNumberPicker);
  }
  
  it('should generate default value message', () => {
    [1, 2, 4, 7].forEach(time => {
      //Given
      const generateTimedMessage = configureGenerateTimedMessage(time);
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(time.toString());
    })
  });
  
  it('should generate Fizz message', () => {
    [3, 6, 9, 12, 21].forEach(time => {
      //Given
      const generateTimedMessage = configureGenerateTimedMessage(time);
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(MessageType.FIZZ);
    });
  });
  
  it('should generate Buzz message', () => {
    [5, 25, 35].forEach(time => {
      //Given
      const generateTimedMessage = configureGenerateTimedMessage(time);
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(MessageType.BUZZ);
    });
  });
  
  it('should generate Fizz Buzz message', () => {
    [0, 15, 45].forEach(time => {
      //Given
      const generateTimedMessage = configureGenerateTimedMessage(time);
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(MessageType.FIZZBUZZ);
    });
  });
  
  it('should generate Happy message', () => {
    [10,20,30,100].forEach(time => {
      //Given
      const generateTimedMessage = configureGenerateTimedMessage(time,7);
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(MessageType.HAPPY);
    });
  });
  
  it('should generate UnHappy message', () => {
    [10,20,30,100].forEach(time => {
      //Given
      const generateTimedMessage = configureGenerateTimedMessage(time,6);
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(MessageType.UNHAPPY);
    });
  });
});

