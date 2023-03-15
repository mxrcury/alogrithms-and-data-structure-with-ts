const naiveSearch = (longStr:string,shortStr:string):number => {
    let counts:number = 0
    for (let i = 0; i < longStr.length; i++) {
      for (let j = 0; j < shortStr.length; j++) {
        if(longStr[j + i] !== shortStr[j]) break
        if(j === shortStr.length - 1) counts++
      }
    }
    return counts
}