// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
class TreeMaker {
    left;
    right;
    
    constructor(keyT, valueT) {
        this.valueT = valueT;
        this.keyT = keyT;
    }
}

let root = new TreeMaker("A", "A");
root.left = new TreeMaker("B", "B");
let BNode = root.left;
BNode.left = new TreeMaker("C", "C");
BNode.right = new TreeMaker("H", "H");

let CNode = BNode.left;
CNode.left = new TreeMaker("C", "C");
CNode.right = new TreeMaker("G", "G");

root.right = new TreeMaker("K", "K");

// console.log(root)
