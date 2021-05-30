import { TreeNode } from "./treeNode";

export function recursivePreorderTraversal(root: TreeNode | null): number[] {
    const values: number[] = [];

    if (!root) {
        return values;
    }

    const traverse = (node: TreeNode | null) => {
        if (!node) {
            return;
        }

        values.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);

    return values;
}

export function iterativePreorderTraversal(root: TreeNode | null): number[] {
    const values: number[] = [];

    if (!root) {
        return values;
    }

    const stack = [];

    stack.push(root);

    while (stack.length) {
        const node = stack.pop();

        if (node) {
            values.push(node.val);

            if (node.right) {
                stack.push(node.right);
            }

            if (node.left) {
                stack.push(node.left);
            }
        }
    }

    return values;
}

const root = new TreeNode(0);
const left1 = new TreeNode(1);

left1.left = new TreeNode(2);

const lRight1 = new TreeNode(3);

lRight1.left = new TreeNode(4);
lRight1.right = new TreeNode(5);
left1.right = lRight1;

root.left = left1;

const right1 = new TreeNode(6);
const right2 = new TreeNode(7);

right2.left = new TreeNode(8);
right2.right = new TreeNode(9);
right1.right = right2;

root.right = right1;

console.log(recursivePreorderTraversal(root));
console.log(iterativePreorderTraversal(root));