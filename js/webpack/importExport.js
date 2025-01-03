// this would be located in file 1:
const functionOne = () => console.log('function one')

export{functionOne};

//This would be located in file 2:
import{ functionOne } from './file1.js';

functionOne(); //this should work as expected.
// import export works for objects, factory functs, classes and more