<!-- mock functions begin with 
const variable = jest.fn() <--- THIS

jest.fn() examples:
 -->
  const bool = jest.fn(() => true)

  const array = jest.fn([1,2,3,4,5])

<!-- 2 type of mocks -->
1. By creating a mock function to use in test code

2. Or writing a manual mock to override the module's dependancy

<!-- Mock function -->
export function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

const forEach = require('./forEach');

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
  forEach([0, 1], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

// The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

<!-- Mock Property -->
const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances);
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts);
// > [ <b> ]

expect(someMockFunction.mock.calls).toHaveLength(1);

ETC

<!-- Mocking Modules -->
import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

export default Users;

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp); <!-- Creates a fake response for .get() in function -->

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});