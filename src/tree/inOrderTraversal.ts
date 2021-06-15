import { TreeNode } from "./treeNode";

export function recursiveInOrderTraversal(root: TreeNode | null): number[] {
    const values: number[] = [];

    const traverse = (node: TreeNode | null) => {
        if (!node) {
            return;
        }

        traverse(node.left);
        values.push(node.val);
        traverse(node.right);
    }

    traverse(root);

    return values;
}

export function iterativeInOrderTraversal(root: TreeNode | null): number[] {
    const values: number[] = [];

    if (root) {
        return values;
    }

    const stack = [];
    let node: TreeNode | null = root;

    while (stack.length || node) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop() as TreeNode;
            values.push(node.val);
            node = node.right;
        }
    }

    return values;
}