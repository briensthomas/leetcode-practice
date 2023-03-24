/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/*
          4
       /    \
      2      7
     / \    / \

*/
var invertTree = function(root) {
    // If the root is null, we don't need to continue with the algorithm
    if (root === null) return root;

    
    // each node in the tree is an object containing a left and right key, correlating to the value of its children
    // So we want to swap the children's values
    // However, if you were to say something like root.left = root.right, then you no longer have access to the key:value for root.left, so we need to create a temporary key:value to hold onto that root.left
    let tempLeft = root.left;
    root.left = root.right;
    root.right = tempLeft;
    
    // recursively call the function on the left sub-tree to swap the key:values
    invertTree(root.left);
    // recursively call the function on the right sub-tree to swap the key:values
    invertTree(root.right);
    // then return the root
    return root;
    
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // if the root has no value, the max depth is 0;
    if (root === null) return 0;

    // We need a way to check the depth of each side of the tree when the root does have a value
    function depthFirstSearch(root) {
    // recursively call the original function on each child(left, right) of the root
        let leftSubTree = maxDepth(root.left);
        let rightSubTree = maxDepth(root.right);
    // instead of comparing the size of the children, we can run it through a built-in method
    // to return the larger of the two numbers
        const depth = Math.max(leftSubTree, rightSubTree);
    // Since the root counts as a depth of 1, that needs to be added to the Math.max();
        return depth + 1;
    };

    return depthFirstSearch(root);
};