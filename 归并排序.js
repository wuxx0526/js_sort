const arr = [1, 33, 4, 22, 5, 19]

function Merge(arr) {
    const len = arr.length
    if (len < 2) {
        return arr
    }
    let middle = Math.floor(len / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return MergeNode(Merge(left), Merge(right))
}
function MergeNode(left, right) {
    console.log(left, right)
    let res = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    while (left.length) {
        res.push(left.shift())
    }
    while (right.length) {
        res.push(right.shift())
    }
    console.log(res)
    return res
}

console.log(Merge(arr))