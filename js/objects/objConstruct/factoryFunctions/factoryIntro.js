// Have only one difference to Constructor Functions:
// The levy the power of closures. Instead of a new keyword to create an object, setup and return
// the new object when the function is called.

// ex.
const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
  }
  // hey, this is a constructor - 
  // then this can be refactored into a factory!
  
  function createUser (name) {
    const discordName = "@" + name;
    return { name, discordName };
  }
  // and that's very similar, except since it's just a function,
  // we don't need a new keyword