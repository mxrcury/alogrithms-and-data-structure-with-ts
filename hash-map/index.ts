interface IHashMap {
    keyMap:Array<any>
    set(key:string,value:string):void
    get(key:string):THashValue
}

type THashValue = string | number | null 

class HashMap implements IHashMap {
    keyMap:Array<any>;
    constructor(size:number = 53) {
        this.keyMap = new Array(size)
    }
    private hash(key:string):number{
        let total = 0
        let weird_prime = 31;
        for (let i = 0; i < Math.min(key.length,100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * weird_prime + value) % this.keyMap.length
        }
        return total
    }
    set(key:string,value:string):void{
        const hashedKeyIndex = this.hash(key)
        if(!this.keyMap[hashedKeyIndex]){
            this.keyMap[hashedKeyIndex] = []
        }
        this.keyMap[hashedKeyIndex].push([key, value])
    }
    get(key:string):THashValue {
        const hashedKey = this.hash(key)
        let found:THashValue = null;
        if(!this.keyMap[hashedKey]) return found
        for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
            if(this.keyMap[hashedKey][i][0] === key ) {
                found = this.keyMap[hashedKey][i][1]
                return found
            }
        }
        return found
    }
    values():THashValue[] {
        const valuesArr:THashValue[] = []
        let value:THashValue = null;
        for (let i = 0; i < this.keyMap.length; i++) {
            for (let j = 0; this.keyMap[i] !== undefined && j < this.keyMap[i].length; j++) {
                value = this.keyMap[i][j][1]
                if(!valuesArr.includes(value)) {
                    valuesArr.push(value)
                }
            }
        }
        return valuesArr
    }
    keys():THashValue[] {
        const keysArr:THashValue[] = []
        let key:THashValue = null;
        for (let i = 0; i < this.keyMap.length; i++) {
            for (let j = 0; this.keyMap[i] !== undefined && j < this.keyMap[i].length; j++) {
                key = this.keyMap[i][j][0]
                if(!keysArr.includes(key)) {
                    keysArr.push(key)
                }
            }
        }
        return keysArr
    }
}

const hashMap = new HashMap()

hashMap.set('pink','#ffd234')
hashMap.set('blue','#f1fca34')

// console.log(hashMap.keyMap);

console.log(hashMap.keys());
// console.log(hashMap.get('blueww'))
