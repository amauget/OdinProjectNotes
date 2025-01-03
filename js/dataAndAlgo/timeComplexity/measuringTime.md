Measuring code efficiency is to evaluate how many 'steps' it takes to complete.

The goal is to reduce the algorithm to as few steps as possible without sacrificing readability.

Count the steps in this function:
function oddNumbersLessThanTen() {
  let currentNumber = 1;

  while (currentNumber < 10) {
    if (currentNumber % 2 !== 0) {
      console.log(currentNumber);
    }

    currentNumber += 1;
  }
}

STEPS:
1: assign number 1 to a variable
2: for each iteration of the loop where currentNumber < 10:
    1. compare current number
    2. check if current number is odd.
    3. if it is, output current number
    4. increase currentNumber by 1.
3. exit the loop by comparing currentNumber to 10

This makes for a total of 37 steps...


ASYMPTOTIC NOTATIONS:
  used to describe the running time of an algorithm. Because an algorithm's run time can defer depending on the input,
  there are several notations for measuring run time in different ways:

    1. Big O Notation: Finds the upper bound of algorithm, or the worst-case scenario
    2. Omega Notation: Lower bound or best case scenario
    3. Theta Notation: Represents both the upper and lower bounds by assigning an average case complexity rating.

____________________________________________________________________

BIG O NOTATION:
The Big O Notations in the order of speed from fastest to slowest:
  O(1) - Constant Complexity
    An example of constant complexity is ARRAY[Index]. This method selects a location that is always 1 step regardless of array size.

  O(log N) - Logarithmic Complexity
    Steps within this process increase by 1 every time the data doubles. So, if data elements increase from 5000 -> 10,000, only 1 more step will be implemented.
    Example Binary Search: 
      arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; must be a sorted array. 
      Say you want to find the number 7.
      search will divide the index in half and find the value. In this case that number is 5.
      since 5 < 7, the current index, and everything that came before is elminated dividing the array count by 2
      
      arr = [-, -, -, -, -, 6, 7, 8, 9, 10]
      selects the middle index again
      
      arr = [6, 7, 8, -, -]
      selects the middle index again
      
      arr = 7

  O(N) - Linear Complexity
    Data count and step count grow at the same rate. If 7 data points, 7 steps..

  O(N log N) - N x log N Complexity
    Breaks the data in half and feeds it to another algorithm

  O(n²) - Quadratic Complexity
    has a complexity factor of dataCount^2
    ie. stepCount = dataCount ** 2
    example:
      for(let i = 0; i < 5; i++){
        for(let w = 0; w < 5; w++){
          THIS ADDS UP TO 25 STEPS. 
        }
      }

  O(n³) - Cubic Complexity
    stepCount = dataCount ** 3;
    ex. would be 3 nested loops.. brutal
    Here, iterating an array of 3 items would amount to 27 steps.

  O(2ⁿ) - Exponential Complexity
    each added item doubles the steps
    array of 3 items = 12 steps
    array of 10 items = 1024 steps

  O(N!) - Factorial Complexity
    pretty self explanatory. array of 10 items will take 3,628,800 steps.