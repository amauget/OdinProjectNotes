/* Store an ordered list of objects, natural choice is an array 

  HOWEVER: 
    Arrays have a problem: delete element and inssert element operations are expensive in terms of memory.
    The only fast array methods are push/pop, and they don't allow for indexes. 

  This is where linked lists come into play.

  LINKED LIST COMPONENTS:
    value: current value
    next: property referencing the next linked list element or null if current is the end


*/

let linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// Alternative method of creation
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

// STRONG SUITS OF ARRAYS OVER LINKEDLIST:
/* list can't access an element by its number ie. arr[n] 
  instead, lists have to chain keys until reaching item location.

  OTHER LIST ACCESS KEYS:
    prev: reference the previous element.
    tail: reference the last element of list.(and update it when adding/removing)
    
*/