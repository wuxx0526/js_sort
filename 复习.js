const arr = [1, 33, 4, 22, 5, 19]


!function main () {
    const len = arr.length
    let preIndex, current
    for (let i = 1; i < len; i++) {
        preIndex = i - 1
        current = arr[i]
        i === 4 && console.log(arr)
        while (preIndex > 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            --preIndex
            i === 4 && console.log(arr)
        }
        arr[preIndex + 1] = current
    }

}()

console.log(arr)