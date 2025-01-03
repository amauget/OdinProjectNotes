/* concept of inserting an value to a tree:
We start at the root, and search until the most relevant leaf node is found. 
We then add our value as a child of the leaf node.

1. check the inserted value with the value of the current node.
    a. if inserted is less than node, mode to the left subtree
    b. otherwise, move to the right subtree.
2. once the leaf node is reached, insert the value to the left/right of the node based on relational value.

https://www.geeksforgeeks.org/insertion-in-binary-search-tree/?ref=lbp
*/