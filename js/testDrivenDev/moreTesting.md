"More Testing" Module Notes:

  Testing Isolation is very important, otherwise the tests love effectiveness.
  If you are testing a function that requires multiple functions to return its value, failed tests will become more difficult to isolate.

  <!-- Pure Functions -->
    This is one of the biggest benfits of TDD. A pure function is a function that can stand alone in its usability. Tightly coupled functions either rely on the value of other functions too heavily to easily test, or mix tasks and logic into a single function.

    ex.
      HERE IS A TIGHTLY COUPLED EXAMPLE:

      function guessingGame() {
        const magicNumber = 22;
        const guess = prompt('guess a number between 1 and 100!');
        if (guess > magicNumber) {
          alert('YOUR GUESS IS TOO BIG');
        } else if (guess < magicNumber) {
          alert('YOUR GUESS IS TOO SMALL');
        } else if (guess == magicNumber) {
          alert('YOU DID IT! 🎉');
        }
      }

      HERE IS THE FIXED VERSION (seperate the logic for testing):

      function evaluateGuess(magicNumber, guess) {
        if (guess > magicNumber) {
          return 'YOUR GUESS IS TOO BIG';
        } else if (guess < magicNumber) {
          return 'YOUR GUESS IS TOO SMALL';
        } else if (guess == magicNumber) {
          return 'YOU DID IT! 🎉';
        }
      }

      function guessingGame() {
        const magicNumber = 22;
        const guess = prompt('guess a number between 1 and 100!');
        const message = evaluateGuess(magicNumber, guess);
        alert(message);
      }

      guessingGame();
<!-- Types of tight coupling -->
Subclass coupling: 
  dependant on implementation and entire hierarchy of parent class. (Tightest form of coupling)

Control Dependencies:
  Code that controls its dependencies by telling them what to do. 
  e.g. passing method names
    if method names come from an API, and the API changes its names, 
    the code will break.

Mutable State Dependencies:
  Code that shares mutable state with other code.
    eg. Can change properties on a shared obj.
    If timing is undetermined, it may be impossible to achieve program correctness without a complete overhaul of dependent units.

State Shape Dependencies:
  Code that shares data structures with other code, and only uses a subset of structure.
  If shape of shared structure changes, it could break dependent code.

Event/message Coupling:
  Code that communicates with other units via message passing, events, etc.

<!-- Mocking -->
Mocking should only be considered if decomposition strategies have failed. 
Ie. the problem cannot be broken down any further.

Mocking: the writing of 'fake' versions of a function that always behaves exactly how you want.

ex. A function receives info from DOM inputs. Instead of entering info over and over, a mock function can imitate grabbing info from the page, and using its value in testing.

<!-- A code smell -->
A code smell is a surface indication that often points to a deep problem in the system.

In short, it's a warning that MIGHT indicate a bug.

<!-- Test Coverage -->
Amount of code covered by a test case. Coverage reports can be made by instrumenting the code and recording which lines were exercised during a test run.

The targetted test coverage should be around 90% of overall code. Attempting to go higher is non-productive and can overcomplicate your code.

Code coverage: how much of the code is exercised

Case coverage: how many of the use-cases are covered by the test suites

<!-- The Hallmarks of a pure function: -->
Immutability:
  Pure functions don't mutate existing values. They return new ones instead.

No side effects:
  The only observable effect on a pure function is its return value. Nothing else should be altered (Shoutout to global variables).

It should do one thing.

Structure, not instructions:
  Pure functions describe structural relationships between data, not instructions for the computer to follow. This way, conflicting instructions running at the same time can't cause problems.