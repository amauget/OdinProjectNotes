/* Imagine we received this text from a web server:

'{"name":"John", "age":30, "city":"New York"}' */
const serverData = '{"name":"John", "age":30, "city":"New York"}' 
// received from the server in string form

const obj = JSON.parse(serverData);

// Dates must be written as a string in JSON then parsed w/ reviver function:

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const object = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

//Converting string to function:
const info = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const newObj = eval("(" + obj.age + ")");
// key for function object is handled in the below format:
newObj.age();

/* TRY TO AVOID ADDING FUNCTIONS TO JSON AS THEY LOSE THEIR SCOPE. */
