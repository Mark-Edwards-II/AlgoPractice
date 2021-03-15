function birthdayCakeCandles(candles) {
    // Write your code here
    let countMax = 0;
    let max = 0;
    for(let i = 0; i < candles.length; i++) {
        if(candles[i] > max) max = candles[i];
    }
    for(let j = 0; j < candles.length; j++) {
        if(candles[j] === max) countMax++;
    }
    return countMax;
}

console.log(birthdayCakeCandles([1,2,3,4]));
console.log(birthdayCakeCandles([4,4,1,3]));
console.log(birthdayCakeCandles([3,3,3,4]));
console.log(birthdayCakeCandles([3,3,3,2]));