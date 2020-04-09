# Timed Message Generator

Use a clock, interpret values of the seconds:

   - If the second is **not** divisible by 10(except for 0)
       FizzBuzz:
       - if divisible by 3 => display Fizz
       - if divisible by 5 => display Buzz
       - if divisible by 3 and by 5 => display Fizz Buzz
       - else display the value of the second

   - else (second is divisible by 10)
       Happy:
       - generate a random number between 1 and 10 :
         - if the random value is equal to '7' =>display  Happy 
         - else =>display  Unhappy
   
  **Examples**<br>

       - 0->Fizz Buzz(this is an exception because divisible by 10)

       - 1->1

       - 3->Fizz

       - 4->4

       - 5->Buzz

       - 15->Fizz Buzz

       - 20 ->
            based on random value :<br>
             - 6 -> UnHappy
             - 7 -> Happy
             - 8 -> UnHappy
             - 11 -> out of bound exception
