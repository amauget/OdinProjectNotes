function Vehicle(type, wheelsCount) {
    if (!(this instanceof Vehicle)) {
      throw Error('Error: Incorrect invocation'); /* This is thrown if new vehicle neglects to define it as new. */
    }
  
    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
  }
  
  // Constructor invocation
  const car = new Vehicle('Car', 4);
  car.type               // => 'Car'
  car.wheelsCount        // => 4
  car instanceof Vehicle // => true
  
  // Function invocation. Throws an error.
  const brokenCar = Vehicle('Broken Car', 3);

  //If new is forgotten, then "this" global var will be set to brokenCar values
  