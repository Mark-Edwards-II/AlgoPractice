function miniMaxSum(arr) {
    let newArr = [];
    let min;
    let max;
    let j = 0;
    const L = arr.length;
    while(j < L) {
        if(j === 1) {
            min = newArr[0];
            max = newArr[0];
        }
        let sum = 0;
        for( let i = 0; i < L; i++) {
            if(i != j) {
                sum += arr[i];
            }
        }
        newArr.push(sum);
        if(newArr[j] > max) max = newArr[j];
        if(newArr[j] < min) min = newArr[j];
        j++;
    }
    console.log(min, max);
}

miniMaxSum([ 1, 2, 3, 4, 5 ]);
miniMaxSum([ 7, 69, 2, 221, 8974 ]);