const merge = (arr1:number[],arr2:number[]) => {
    const res:number[] = []
    let length:number = arr1.length
    let i:number = 0 ,j:number = 0
    while(i < length) {
        if(arr1[i] > arr2[j]) {
            res.push(arr2[j])
            j++
        } else {
            res.push(arr1[i])
            i++
        }
    }
    while(i < arr1.length) {
        res.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        res.push(arr2[j])
        j++
    }
    return res
}


const mergeSort = (array:number[]):number[] => {
    if(array.length <= 1) return array;
    let mid = array.length / 2
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid, array.length))
    return merge(left,right)
}



console.log(mergeSort([2,3,1,4,23,19])); // [ 1, 2, 3, 4, 19, 23 ]
