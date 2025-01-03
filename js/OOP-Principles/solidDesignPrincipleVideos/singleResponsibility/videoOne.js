import logMessage from "./logger.js";
//Single Responsibility Principle

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories
    this.currentCalories = 0 
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if(this.currentCalories > this.maxCalories){
      // this.logCalorieSurplus()
      logMessage('Max calories exceeded.')
    }
  }

 /*  logCalorieSurplus(){
    console.log('Max calories exceeded.')
  } 
  moved to logger.js
  */
}

const calorieTracker = new CalorieTracker(2000);

calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);