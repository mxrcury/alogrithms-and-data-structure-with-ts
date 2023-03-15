const quickSort = (array: number[]): number[] => {
    if (array.length <= 1) return array
    let mid = Math.ceil(array.length / 2)
    const less: number[] = []
    const greater: number[] = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[mid])
            continue
        if (array[i] < array[mid]) less.push(array[i])
        if (array[i] > array[mid]) greater.push(array[i])
    }
    return [...quickSort(less), array[mid], ...quickSort(greater)]
}

console.log(quickSort([2,3,1,4,23,19])); // [ 1, 2, 3, 4, 19, 23 ]
