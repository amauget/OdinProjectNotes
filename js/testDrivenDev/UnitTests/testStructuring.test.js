/* working with async tests will take the following format

it('statement' , () => 
  orderTotal({
    items:[
      {name: 'dragon candy', price: 3}
    ]
  }).then(result => expect(result).toBe(3))
) 

this calls the async function, waits for promised vars to be defined, then checks values.

*/
// FAKE FETCH
it('message', () => {
  const fakeFetch = (url) =>{
    
  }
  functionCall(fakeFetch, {
    data: 'item'
  }).then(result => {
    expect(/* specific value(s) or truthiness */)
  })
})
// This allows to test function with mock data so that inputs, or variable api requests are not needed.
// fakeFetch could also equate to a created obj that imitates api request