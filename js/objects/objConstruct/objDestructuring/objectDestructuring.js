// allows object.key relationship to fall into variable

const user = {
    id: 42,
    isVerified: true,
  };

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true

/* You can also assign names different than the obj property */
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true

// this can simultaneously occur while assigning default value in case of
// undefined.

const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5

// Function destructuring method:
const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
      firstName: "Jane",
      lastName: "Doe",
    },
  };

function userId({ id }) {
return id;
}

console.log(userId(user)); // 42
  