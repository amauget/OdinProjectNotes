//GLobal Obj
//For reference, some of the BROWSER global obj items include "setTimeout" & "alert" functions.

//Global Node Objs
console.log(global)

global.setTimeout(() => {
    console.log('in the timeout')   
    clearInterval(int) //halts the "int" interval after 3 seconds 
}, 3000);

const int = setInterval(() => {
    console.log('interval')
}, 1000)

console.log(__dirname) //will show the directory path to file's location
console.log(__filename) // does the same, but adds the file name on the end of the path.

//BROWSER OBJECTS AREN'T ALLOWED HERE. IE 'document.queryselector' type of methods. 

