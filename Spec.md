# Timed Message Generator

Use a clock, interpret values so you can every second 

   ### if the second is divisible by 10
    FizzBuzz:
    - if divisible by 3 => Fizz
    - if divisible by 5 => Buzz
    - if divisible by 3 and by 5 => value of the second

   ### else (second is divisible by 10)
    Happy:
    - generate a random number between 1 and 10 :
      - if the random value is equal to '7' => Happy 
      - else => Unhappy
   
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
             11 -> out of bound exception
