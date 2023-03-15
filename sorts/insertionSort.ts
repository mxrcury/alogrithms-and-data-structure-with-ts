const insertionSort = (array:number[]) => {
    let current:number;
    let j:number;
    for (let i = 1; i < array.length; i++) {
        current = array[i]
        for (j = i - 1; j >= 0 && current < array[j]; j--) {
            array[j + 1] === array[j]
        }
        array[j + 1] = current
    }
    return array
}

insertionSort([ 1, 2, 3, 4, 19, 23 ]) // [ 1, 2, 3, 4, 19, 23]