/* Ground rules:
1. modules (or functioning components of program) are all seperated into different functions
2.No global vars
3. if a module manages more than 1 thing, it needs to be split up
4. seperation of concerns, ie tasks within module need to be split up as well. isolating a variable, appending to array, and output should all be seperate for example. 
5.Don't repeat yourself.
6. efficient dom selection, so set dom element to variable.
7. no memory leaks (see 8.)
8. all events can be unbound. an event listener attached to a DOM element that is hidden needs to have the ability to 
    disengage. Otherwise the event is still listening causing the memory leak. */

//Object literals ex. below:
var myModule = {
    name:'Aaron',
    age:'28',
    sayName: function(){
        alert(this.name);
    },
    setName: function(newName){
        this.name = newName;
    }
};
myModule.setName('Roger')
myModule.sayName(); /* alert will now say Roger */