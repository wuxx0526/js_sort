const arr = [1, 33, 4, 22, 5, 19]

!function main () {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        let minIndex = i
        for (let j = i; j < len; j++ ) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
}()

console.log(arr)