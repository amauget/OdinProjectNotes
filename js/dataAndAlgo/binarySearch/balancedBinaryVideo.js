/* Given a sorted integer array  of length n,
create a balanced binary search tree using elements of the array.

A binary search tree is balance IF:
  height of left/right search tree of root differ by at 1 at most

  left/right subtree are balanced.

*/

/* Balanced Binary Algorithm

  1. Initialize start = 0, end = array.length -1 

  2. mid = (start + end) / 2

  3. Create a tree node with mid as root (let's call it "A")

  4. recursively do the following:
      
    a. Calculate mid of left subarray and make it roof of left subtree of A (start = 0, end = mid - 1)

    b. Do the same for the right side. (start = mid + 1 end = end)


  
*/