const bubbleSort = (nums: number[]): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                let tmp: number = nums[j + 1]
                nums[j + 1] = nums[j]
                nums[j] = tmp
            }
        }
    }
    return nums
}

console.log(bubbleSort([2, 3, 1, 4, 23, 19])) // [ 1, 2, 3, 4, 19, 23 ]