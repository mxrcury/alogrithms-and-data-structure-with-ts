const digitCount = function (num:number) {
    if (num === 0)
        return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};
const mostDigits = function (nums:number[]) {
    let maxCount = 0;
    for (let index = 0; index < nums.length; index++) {
        maxCount = Math.max(maxCount, digitCount(nums[index]));
    }
    return maxCount;
};
const getDigit = function (num:number, i:number) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const radixSort = function (nums):number[]{
    const maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, function () { return []; });
        for (let i:number = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
    }
        nums = [].concat(...digitBuckets)
    }
    return nums
};

radixSort([ 1, 23, 3, 4, 19, 23 ]) // [ 1, 2, 3, 4, 19, 23 ]