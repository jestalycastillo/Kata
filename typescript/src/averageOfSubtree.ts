class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function averageOfSubtree(root: TreeNode | null): number {
    let res = 0;

    function postorder(node: TreeNode | null): [number, number] {
        if(node === null) return [0,0];

        let [leftSum, leftCount] = postorder(node.left);
        let [rightSum, rightCount] = postorder(node.right);

        let sum = leftSum + rightSum + node.val;
        let count = 1 + leftCount + rightCount;
        let average = Math.floor(sum / count);

        if(average === node.val) res++;

        return [sum, count];
    }

    postorder(root);

    return res;
}

averageOfSubtree(new TreeNode(1, new TreeNode(2), new TreeNode(3)));