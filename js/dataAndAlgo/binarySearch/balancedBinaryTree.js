/* Balanced Binary Search Trees: 
    Allows fast operations for lookup, insertion and deletion of items.
*/

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

/* find 4 */

class Node {
  constructor(d){
    this.data = d
    this.left = null
    this.right = null
  }
}

var root = null

// Now, throw in a function that constructs the balanced Binary Search Tree

function sortedArrayToBST(arr, start, end){
  /* Best Case: Does not contain value*/
  if(start > end){ 
    return null
  }
  /* Get the middle element and make it left child of root. */
  let mid = parseInt((start + end)/2)
  let node = new Node(arr[mid])
  /* Recursively construct the subtrees and make it left/right child of root. */

  node.left = sortedArrayToBST(arr, start, mid-1)
  
  node.right = sortedArrayToBST(arr, mid + 1, end);
  console.table(node)
  return node
}

function preorder(node){
  if(node === null){
    return
  }
  
  preorder(node.left);
  preorder(node.right);
}
const array = [1, 2, 3, 4, 5, 6, 7];
const  n = arr.length;
root = sortedArrayToBST(array, 0 , n-1)
preorder(root)

/* Output
PreOrder Traversal of constructed BST 
4 2 1 3 6 5 7  < --- ORDER OF INDEX

          4    <---- TREE STRUCTURE
        /   \
       2     6
      /\     /\
     1  3   5  7
*/