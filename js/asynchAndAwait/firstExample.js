// Here is a standard asynch function
function getPersonsInfo(name) {
  return server.getPeople().then(people => {
    return people.find(person => { return person.name === name });
  });
}

// Here is one utilizing asynch and await:
async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find(person => { return person.name === name });
  return person;
}

getPersonsInfo(name).then() /* <--- This is permitted for chaining async promise steps. */
/*
using async REQUIRES "await" within the function.

async can also be used in any way that a function can be used.

SOME ASYNC EXAMPLES:
*/
let items = [1,2,3,4,5];

items.forEach(item, async () =>{
  const index = await server.getIndex(); /* this doesn't have a real def. just using it to emulate a server request. */
  let item = items[index];
  return item;
})

server.getPeople().then(async people => {
  people.forEach(person => {
    // do something asynchronously for each person
  });
});

/* AWAIT: always requires a function assigned to a variable. */