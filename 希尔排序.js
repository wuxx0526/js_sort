const arr = [55,26,33,80,70,90,6,30,40,20]


!function main () {
    const len = arr.length
    for(let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // 注意：这里和动图演示的不一样,动图是分组执行,实际操作是多个分组交替执行
        for(let i = gap; i < len; i++) {
            let j = i;
            let current = arr[i];
            while(j - gap >= 0 && current < arr[j - gap]) {
                gap = 2 && console.log(arr)
                arr[j] = arr[j - gap];
                j = j - gap;
            }
            arr[j] = current;
        }
    }
}()

console.log(arr)