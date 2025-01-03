/* Bad example below: */

class Car {
  constructor(make, model) {
      this.make = make;
      this.model = model;
  }

  start() {
      if (...) { // Logic to determine whether or not the car should start
          this.errorLog(`The car ${this.make} ${this.model} started.`);
          return true;
      }
      this.errorLog(`The car ${this.make} ${this.model} failed to start.`);
      return false;

  }

  errorLog(message) {
      console.log(message);
  }
}

/*Commented blocks violate single responsibility principal because the logic
for logging the info should not be a responsibility of Car class.
See below.
*/
class ErrorLog{
  static log(message){
    console.log(message);
  }
}

class CarCorrect {
  constructor(make, model) {
      this.make = make;
      this.model = model;
  }

  start() {
      if (...) { // Logic to determine whether or not the car should start
          ErrorLog.log(`The car ${this.make} ${this.model} started.`);
          return true;
      }
      ErrorLog.log(`The car ${this.make} ${this.model} failed to start.`);
      return false;
  }
}

/* This format allows the 2 classes to be edited without affecting the other. */