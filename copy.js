const arr = [1, 33, 4, 22, 5, 19]


!function main () {
    const len = arr.length
    for(let i = 0; i < len; i++ ) {
        for(let j = 1; j < len - 1 -i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
}()

console.log(arr)