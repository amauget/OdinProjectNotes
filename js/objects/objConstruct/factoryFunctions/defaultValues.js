// destructured properties can have a default value, which is 
// used when no other value is present. doesn't apply to null because that value
// is technically present.
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null

// The default value can be any expression. It will only be evaluated when necessary.
const { b = console.log("hey") } = { b: 2 };
// Does not log anything, because `b` is defined and there's no need
// to evaluate the default value.
