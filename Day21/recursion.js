// 1. Using a for loop (Slow)
function SumTo1(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 2. Using recursion (Slower)
function SumTo2(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + SumTo2(n - 1);
    }
}

// 3. Using Arithmetic progression (Fastest)
function SumTo3(n) {
    return n*(1 + n)/2;
}

console.log("SumTo1: " + SumTo1(100));
console.log("SumTo2: " + SumTo2(100));
console.log("SumTo3: " + SumTo3(100));

// Factorial
// 3! = 3*2*1
function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

// Fibonacci
// 1, 1, 2, 3, 5...
function fibonacci(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return (fibonacci(n - 2) + fibonacci(n - 1));
    }
}

console.log(fibonacci(7));

// Single-linked List
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

// Loop (more effective)
// Go through the list and continue logging the value if there is a next list
function printList1(list) {
    let temp = list;
    while(temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

// Recursive
// Log the current value and then go through the list if there is a next value
function printList2(list) {
    console.log(list.value);
    if (list.next) {
        printList2(list.next);
    }
}

printList1(list);
printList2(list);

// Loop in reverse
// Go through the list normally, save the values in the array and go through and print it in reverse
function printReverseList1(list) {
    let arr = [];
    let temp = list;
    while(temp) {
        arr.push(temp.value);
        temp = temp.next;
    }

    for(let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// Recursive in reverse
// Go through the list normally, print it in reverse call stack
function printReverseList2(list) {
    if (list.next) {
        printReverseList2(list.next);
    }
    console.log(list.value);
}

printReverseList1(list);
printReverseList2(list);

// Collatz conjecture - always possible to get back to 1
// Count the number of steps
function collatz(n, steps = 0) {
    if (n == 1) { // if n is 1
        return steps;
    } else if (n % 2 == 0) { // if n is even, n/2
        steps += 1;
        return collatz(n/2, steps);
    } else if (n % 2 != 0) { // if n is odd, 3*n + 1
        steps += 1;
        return collatz(3 * n + 1, steps);
    }
}

console.log(collatz(7));

// CODE QUIZ ON RECURSION - CodinGame (1-9)

// 1. Sum all the numbers
function sumRange(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumRange(n - 1);
    }
}

console.log(sumRange(3));

// 3 + sumRange(2) = 3 + 3
// 2 + sumRange(1) = 2 + 1 = 3
// sumRange(1) = 1


// 2. Power function
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1); 
    }
}

console.log(power(2, 4));

// 2^3 = 2 * 2 * 2
// 2 * power(2, 2) = 2 * 4 = 8
// 2 * power(2, 1) = 2 * 2 = 4
// 2 * power(2, 0) = 2 * 1 = 2


// 3. Calculate factorial
function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

// 5! 
// 5 * factorial(4) 5*24 = 120
// 4 * factorial(3) = 4*6 = 24
// 3 * factorial(2) = 3*2 = 6
// 2 * factorial(1) = 2*1 = 2
// factorial(1) = 1


// 4. Check all values in an array
function allLoop(array, callbackFunction) {
    let check = true;
    for (let i = array.length - 1; i > 0; i--) {
        if (!callbackFunction(array[i])) {
            check = false;
        }
    }
    return check;
}

allLoop([1,2,9], function(num){
    return num < 7;
});

// WIP Recursive


// 5. Product of an array
function productOfArrayLoop(array) {
    if (array.length == 0) {
        return 0;
    }
    let product = 1;
    for (let i = array.length - 1; i > 0; i--) {
        product = product * array[i];
    }
    return product;
}

productOfArrayLoop([1,2,3]);

// WIP Recursive


// 6. Search JS object


// 7. Parse a multi-dimensional array


// 8. Sum squares of numbers in list that may contain more lists


// 9. Return an array containing the repetitions of the number argument
function replicateLoop(repetitions, n) {
    let arr = [];
    for (let i = repetitions; i > 0; i--) {
        arr.push(n);
    }
    return arr;
}

function replicate(repetitions, n, arr = []) {
    // Reverse the for loop's middle condition
    if (repetitions <= 0) {
        return arr;
    }
    // Push the value into the array and call the recursive function again with one less repetition
    else {
        arr.push(n);
        return replicate(repetitions - 1, n, arr);
    }
}

console.log(replicateLoop(5, 3));
console.log(replicate(5, 3));
