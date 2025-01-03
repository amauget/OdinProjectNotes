/* There are 2 types of object properties:
data properties: truly defined objects in their native location. IE.
  let a = {name: 'aaron', date: '01/14/1996'}

Accessor Properties: functions that execute on getting and setting a value, but look like
                    regular properties to exernal code.

  Getter & Setter methods: denoted by get and set.*/

  /* EXAMPLE */  
  let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() { /* retrieves items for fullName */
      return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
      [this.name, this.surname] = value.split(" "); /* sets value to John Smith */
    }
  };
  console.log(user.fullName)  // John Smith
    // the getter works when obj.propName is read, the setter- when it is assigned.

 
// ACCESSOR DESCRIPTORS
/* 
For accessor properties, there is no value or writable, but inseat there are get and set functions.

  get: a function without arguments, that works when a property is read.

  set: A function with one argument, that is called when the property is set.

  NOTE! THIS DOESN'T CHANGE THE ORIGINAL OBJECT PROPERTIES.
*/