const arr = [1, 33, 4, 22, 5, 19]

!function main () {
    const len = arr.length
    for(let i = 0; i < len - 1; i++ ) {
        let minIndex = i
        for(let j = 1; j <len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}()

console.log(arr)