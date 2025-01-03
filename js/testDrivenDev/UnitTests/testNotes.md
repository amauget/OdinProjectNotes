jest formatting:

test('label of test goes here', () =>{
  expect('testing conditions go here').toBe('testing return value goes here')
})

ie. 
function addition(a, b){
  return a+b
}

test('2+4 = 6', () =>{
  expect(2 + 4).toBe(6)
}) 
<!-- This creates an expectation object. Not much is done with these objects but they
use trackers to determine whether the test fails or succeeds.-->

TOEQUAL: used for testing exact equality
ex.
test('obj assignment', () => {
  const data = {one:1}
  data['two'] = 2
  expect(data).toEqual({one: 1 , two: 2})
})

not.toBe is also viable testing application

test('adding positive nums is not zero', () =>{
  for (let a = 1; a < 10; a++){
    for(let b =1; b < 10; b++){
      expect(a + b).not.toBe(0)
    }
  }
})

<!-- Determining truthiness -->

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () =>{
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

<!-- Numerical Comparisons -->
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

FOR FLOATS!!!! --> use toBeCloseTo() to avoid small rounding errors disrupting test