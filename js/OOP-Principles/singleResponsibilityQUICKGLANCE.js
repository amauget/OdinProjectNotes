/* Single Responsibility Principal:
    a class (or object or module) should only have one responsibility
    While it may do multiple things, this should amount to one task.

    Separate DOM population and application logic!!!
    */

    function isGameOver() {

      // game over logic goes here!
    
      if (gameOver) {
        /* const gameOverDiv = document.createElement('div');
        gameOverDiv.classList.add('game-over');
        gameOverDiv.textContent = `${this.winner} won the game!`;
        document.body.appendChild(gameOverDiv);
        
        THIS IS WRONG! CALL A DOM FUNCTION INSTEAD.
        */
       DOMStuff.gameOver(this.winner);
      }
    }
    // Single responsibility mitigates unintended consequences when altering code.
    