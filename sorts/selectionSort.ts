const selectionSort = (nums:number[]):number[] => {
    let min:number;
    for (let i = 0; i < nums.length; i++) {
        min = i
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[min] > nums[j] ) {
                min = j
            }
        }
        let tmp:number = nums[i]
        nums[i] = nums[min]
        nums[min] = tmp
    } 

    return nums
}

selectionSort([2,3,1,4,23,19]) // [ 1, 2, 3, 4, 19, 23 ]
