// Dependancy Inversion Priciple adds a mediator between source and accessed
// data to determine the source required.
// An example would be a processor that decides which API to access based on conditionals
/* 
Using a mediator seperates high level functioning software from API's,
so if API's change, only the mediator needs updated and high level software
is left untouched.
*/

class Store{
  constructor(paymentProcessor){
    this.paymentProcessor = new PaymentProcessor(user); /* doesn't take the user object */

  }


purchaseBike(quantity){
  this.paymentProcessor.pay(200 * quantity * 100 /* cents */);
  // or call paypal if it's relevent
}
purchaseHelmet(quantity){
  this.paymentProcessor.pay(15 * quantity * 100);
}
}
class StripePaymentProcessor{
  constructor(user){
    this.user = user;
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars){
    this.stripe.makePayment(amountInDollars * 100);
  }
}
class Stripe {
  constructor(user){
    this.user = user;
  }
  makePayment(amountInCents){
    console.log(`${this.user} made a payment of $${amountInCents / 100} with Stripe.`)
  }
}

class PaypalPaymentProcessor{
  constructor(user){
    this.user = user;
    this.paypal = new Paypal(); 
  }
  pay(amountInDollars){
    this.paypal.makePayment(this.user, amountInDollars);
    /* calls new Paypal, and inputs along with user into makePayment() funct */
  }
}

class Paypal{
  makePayment(user, amountInDollars){
    console.log(`${user} made payment of $${amountInDollars} with Paypal.`)
  }
}

const store = new Store(new StripePaymentProcessor('John'));
store.purchaseBike(2);
store.purchaseHelmet(2);