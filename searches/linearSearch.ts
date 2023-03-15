const linearSearch = (array:Array<number | string>,item:number | string):number => {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            return i
        }
    }
    return -1
}