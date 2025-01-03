class ParentClass{}

class childClass1{}

class childClass2{}

function childClassDoSomething(){
  //this function should work for both child classes.
  /* If it doesn't work for both, then the parent class is too restrictive and
  the child classes should come from different parents. */
}