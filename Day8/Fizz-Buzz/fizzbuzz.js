let num = parseInt(prompt("Enter a number you want to FizzBuzz up to: "));

for (let i = 1; i <= num; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*
Plan:
1. No UI, use a prompt box to prompt the user to type in a number
2. Program prompts user input for a number
3. Desired output is a number starting at 1 up to the number the user entered
but if it's divisible by 3 output "Fizz," 
if it's divisible by 5 output "Buzz," 
or if it's divisible by 3 and 5 output "FizzBuzz"
*/

/*
Pseudocode:
1. Prompt the user for a number
2. User enters a number, clicks ok
3. For loop, loop from 1 up to the number (inclusive of)
4. If the number is divisible by 3 with a remainder of 0, output "Fizz"
5. If the number is divisible by 5 with a remainder of 0, output "Buzz"
6. If the number is divisible by 3 and 5 with a remainder of 0, output "FizzBuzz"
7. If 4-6 fail, output the current number in the loop
*/

/*
Notes: 
parseInt turns the string to a number
check if it's divisible by 3 and 5 first and then the individual 3 and 5 respectively
*/

