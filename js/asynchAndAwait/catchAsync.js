/* async can use the catch() function in 2 ways. */

async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find(person => { return person.name === name });
  return person;
}

/* first catch is when func is called */
getPersonsInfo.catch((error) =>{ console.log(error) });

/* the second is with try... catch */


async function personInfo(name){ /* WHILE THIS LOOKS BULKIER, IT MAY BE EASIER TO MAINTAIN IF FUNCTION IS CALLED IN MULTIPLE PLACES. */
  try{
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;

  }catch(error){
    console.log(error);
  }
}