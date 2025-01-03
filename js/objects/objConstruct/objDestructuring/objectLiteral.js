const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      // do stuff!
    }
  };

//   Can call objects in 2 ways:
myObject.property; /* Reserved for var. considered best practice if possible. */
myObject["obnoxious property"];  /* Reserved for strings */

// Another bracket call example
let myVar = 'property';
myObject['property'] /* Calls 'Value!' */

