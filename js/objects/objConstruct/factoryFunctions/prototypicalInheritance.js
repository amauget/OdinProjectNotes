function createPlayer (name, level) {
    const { getReputation, giveReputation } = createUser(name);
  
    const increaseLevel = () => level++;
    return { name, getReputation, giveReputation, increaseLevel };
  }

/*   And there you go! You can create your User, extract what you need from it, 
and re-return whatever you want to - hiding the rest as some private variables or functions! */

// Object.assign() can be used to add on any additional properties desired.
function createPlayer (name, level) {
    const user = createUser(name);
  
    const increaseLevel = () => level++;
    return Object.assign({}, user, { increaseLevel }); /* very useful when paired w/ conditionals */
  }
  