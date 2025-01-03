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