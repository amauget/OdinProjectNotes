There are other factors in addition to step count that can decide whether code is fast enough
The following function determines odd numbers within a sequence through determined max number:

function oddNumbers(maxNumber) {
  let currentNumber = 1;

  while (currentNumber < maxNumber) {
    if (currentNumber % 2 !== 0) {
      console.log(currentNumber);
    }

    currentNumber += 1;  
  }
}

CHANGING -> currentNumber += 2 cuts the function call stack in half and changes nothing about functionality 