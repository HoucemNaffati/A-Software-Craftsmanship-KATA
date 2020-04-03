# TimedMessageGenerator
Advanced Exercise to introduce Example Mapping|TDD|Hexagonal Architecture

1. Implement example-mapped [**specifications**](Spec.md) using TDD (~45min)
2. Try to apply craftsmanship [**rules and principles**][./OurRules.md]
3. Experience impact of those changes on your code "_**in the given order**_" to measure sucess.

### Clean code should be able to adapt quickly without impacting your test suite

# Possible changes:
:zero: Formatting: 
    Put all the messages to up case and replace spaces by '**'. 

:one: Advanced Display: 
we want to output one unique message combining all values (Fuse 'Fizz Buzz' and 'Happy')
````
    in->out
    0 ->0-Fizz Buzz-Happy or unHappy
    1 ->1-1-Happy or UnHappy
    2 ->2-2-Happy or UnHappy
    3 ->3-Fizz-Happy or UnHappy
    10->10-Buzz-Happy or unHappy
    15->15-Fizz Buzz-Happy or unHappy
    21->21-Fizz-Happy or unHappy
````

:two: Happy Hour: 
    Every day, between 17h30 et 18h , higher the chance to have Happy by 2.
    
:three: More profit on rush Hours: between 8h-10h: 
    lower the chance of getting Happy by 4.

:four: Best Client Feature:
    We want to add a forth message at the end: 
    Display "FULL ODD" when the hour, minute and second are ODD or "FULL EVEN" otherwise.
  
:five: Synchronization problem: 
    Use an api like (http://worldtimeapi.org/api/ip)[http://worldtimeapi.org/api/ip] to fetch the hour based on IP address.

:six: ExperiencedUsers: 
    For the deterministic part of the game we want to interpreat the hole interval [min(lastrandom, second%10], max(lastrandom,second%10)] 
    and display the full fuzz buzz serie.
  ```` 
  example:
  random= 5
  second%10 =52 %10 = 2
  => 2-2-Happy or UnHappy|3-Fizz-Happy or UnHappy|4-4-Happy or UnHappy|5-Buzz-Happy or UnHappy
  ````

##### Happy coding FOLKS !
### check my implementation [here](./app)
