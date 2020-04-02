#Title: Timed Message Generator

use a clock, interpret values so you can every second
   ### if the second is divisible by 10
    FizzBuzz:
    +/ if divisible by 3 => Fizz
    +/ if divisible by 5 => Buzz
    +/ else => value of the second

   ### else (second is divisible by 10)
    Happy:
    generate a random number between 1 and 10 :
    if the random value is equal to '7' => Happy 
    else => Unhappy

   ### Examples
       0->Fizz Buzz
       1->1
       3->Fizz
       4->4
       5->Buzz
       15->Fizz Buzz
       20 ->
            based on random value :
             6 -> UnHappy
             7 -> Happy
             8 -> UnHappy

# Possible changes:
0. Formatting: 
    Put all the messages to up case and replace spaces by '**'. 

1. Advanced Display: 
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

2. Happy Hour: 
    Every day, between 17h30 et 18h , higher the chance to have Happy by 2.
    
3. More profit on rush Hours: between 8h-10h: 
    lower the chance of getting Happy by 4.

4. Best Client Feature:
    We want to add a forth message at the end: 
    Display "FULL ODD" when the hour, minute and second are ODD or "FULL EVEN" otherwise.
  
5.Synchronization problem: 
    Use the api : http://worldtimeapi.org/api/ip to fetch the hour based on IP address.

6.ExperiencedUsers: 
    For the deterministic part of the game we want to interpreat the hole interval [min(lastrandom, second%10], max(lastrandom,second%10)] 
    and display the full fuzz buzz serie.
  ```` 
  example:
  random= 5
  second%10 =52 %10 = 2
  => 2-2-Happy or UnHappy|3-Fizz-Happy or UnHappy|4-4-Happy or UnHappy|5-Buzz-Happy or UnHappy
  ````
