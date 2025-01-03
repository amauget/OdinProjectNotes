const orderTotal = require('./orderTotal')

it('logic test', () =>{ /* Here is jest syntax */
   expect(1).toBe(2)
})

// CONVERTING OLD TESTING TO JEST
it('Quantity == 808', () =>{
  expect(orderTotal({
    items:[
    {name: "dragon food", price: 8},
    {name: 'dragon cage (small)', price: 800}
  ]
  
  })).toBe(808)
})

if(orderTotal({
  items:[
  {name: "dragon food", price: 8},
  {name: 'dragon cage (small)', price: 800}
]

}) !== 808){
  throw new Error(`Check fail: expected 808`)
}

/* fitting a function to its test. For ex. returning 808 manually would pass this test
  Triangulation: writing multiple tests that all need to pass for a function to be acceptable.
  Doing this better proves that automated processes are reliably occurring.
*/
