import {StubbedClock} from "../../../../adapters/stubber-clock";
import {GenerateTimedMessage, TimedMessagePresenter} from "./generate-timed-message";
import {MessageType} from "../domain/message-type.type";
import {InMemoryRandomNumberPicker} from "../../../../adapters/inmemory-random-number-picker";
import {RandomValueOutOfBound} from "../domain/RandomValueOutOfBound";

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

class GenerateTimedMessageBuilder {
  private inMemoryRandomNumberPicker = new InMemoryRandomNumberPicker();
  
  constructor(private readonly clock: StubbedClock) {
  }
  
  withSeconds(seconds: number) {
    this.clock.setTime(new Date(2020, 3, 26, 0, 0, seconds));
    return this;
  }
  
  withRandomValue(randomValue: number) {
    this.inMemoryRandomNumberPicker.setRandomValue(randomValue);
    return this;
  }
  
  build() {
    return new GenerateTimedMessage(this.clock, this.inMemoryRandomNumberPicker);
  }
}

describe('Unit Test GenerateTimedMessage', () => {
  const presenter = new SimpleTimedMessagePresenter();
  const clock = new StubbedClock();
  const generateTimedMessageBuilder = new GenerateTimedMessageBuilder(clock);
  
  function verifyTimedMessage(expectedMessage: string) {
    expect(presenter.getTime()).toEqual(clock.getTime());
    expect(presenter.getMessage()).toEqual(expectedMessage);
  }
  
  it('should generate default value message', () => {
    [1, 2, 4, 7].forEach(time => {
      //Given
      const generateTimedMessage = generateTimedMessageBuilder.withSeconds(time).build();
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(time.toString());
    })
  });
  
  it('should generate Fizz message', () => {
    [3, 6, 9, 12, 21].forEach(time => {
      //Given
      const generateTimedMessage = generateTimedMessageBuilder.withSeconds(time).build();
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(MessageType.FIZZ);
    });
  });
  
  it('should generate Buzz message', () => {
    [5, 25, 35].forEach(time => {
      //Given
      const generateTimedMessage = generateTimedMessageBuilder.withSeconds(time).build();
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(MessageType.BUZZ);
    });
  });
  
  it('should generate Fizz Buzz message', () => {
    [0, 15, 45].forEach(time => {
      //Given
      const generateTimedMessage = generateTimedMessageBuilder.withSeconds(time).build();
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(MessageType.FIZZBUZZ);
    });
  });
  
  it('should generate Happy message', () => {
    [10, 20, 30, 100].forEach(time => {
      //Given
      const generateTimedMessage = generateTimedMessageBuilder.withSeconds(time).withRandomValue(7).build();
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(MessageType.HAPPY);
    });
  });
  
  it('should generate UnHappy message', () => {
    [10, 20, 30, 100].forEach(time => {
      //Given
      const generateTimedMessage = generateTimedMessageBuilder.withSeconds(time).withRandomValue(6).build();
      //When
      generateTimedMessage.execute(presenter);
      //Then
      verifyTimedMessage(MessageType.UNHAPPY);
    });
  });
  
  it("should throw RandomValueOutOfBound", () => {
    [0, 11].forEach(random => {
      //Given
      const generateTimedMessage = generateTimedMessageBuilder.withSeconds(10).withRandomValue(random).build();
      //When
      try {
        generateTimedMessage.execute(presenter);
      } catch (error) {
        //Then
        expect(error).toBeInstanceOf(RandomValueOutOfBound);
      }
      
    });
  })
});