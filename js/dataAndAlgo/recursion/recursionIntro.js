/* 
Recrusion is  a pattern of splitting a problem into mulptiple tasks of the same kind, but simpler.

Recursive example:
*/
function pow(x, n){
  if(n == 1){
    return x;
  }
  else{
    return x * pow(x, n-1); /* Returns the x value until n = 1 */
  }
}

alert(pow(2,3)) // output of 8

// USE RECURSIVE IF IT'S A SHORTER SOLUTION THAN FOR/WHILE LOOP

function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}


// Execution Context:
/*  an internal data structure that contains details about the execution of a function.
      current function is paused
      execution context associated with it is remembered in 'execution context stack'
      the nested call executes
      after it ends, the old execution context is retrieved from the stack and outer func is resumed.
      */

// POW() step by step break down:
/* 
call pow(2,3)
execution context stores variables: x = 2, n = 3 & execution flow is at line 1
  Context: {x:2, n:3, line: 1}
Variable remain the same but line changes
  
  Context: {x:2, n:3, line: 5}  

  Subcalls pow(2,2) Or "nested call"
  
    Context: { x: 2, n: 2, at line 1 }

    Context: { x: 2, n: 3, at line 5 }

    Subcalls pow(2,1)

      returns 2, triggering returns in reverse order up the nests until finally returning 8

*/