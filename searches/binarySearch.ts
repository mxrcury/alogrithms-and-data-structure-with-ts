const binarySearch = (array:number[],item:number):number => {
    let mid:number;
    let start:number = 0
    let end:number = array.length - 1
    let found:boolean = false
    let position:number = -1
    while(!found && start !== end) {
        mid = Math.ceil((start + end ) / 2)
        if(array[mid] === item) {
            position = mid
            found = true
        }
        if(array[mid] < item) {
            start = mid + 1
        }
        if(array[mid] > item) {
            end = mid - 1
        }
    }
    return position
}