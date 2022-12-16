class HashMap {
    constructor(size) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < key.length; i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }
    setItem(key, value) {
        const idx = this._hash(key);
        const array = [key, value];

        if (!this.keyMap[idx]) {
            this.keyMap[idx] = [array];
        } else {
            this.keyMap[idx].push(array)
        }
    }
    getItem(key) {
        const idx = this._hash(key);
        let i = 0;
        if (!this.keyMap[idx]) return undefined

        while (i < this.keyMap[idx].length) {
            if (this.keyMap[idx][i][0] === key) {
                return this.keyMap[idx][i]
            }
            i++;
        }
        return false
    }
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            let indexArr = this.keyMap[i]
            if (indexArr) {
                for (let j = 0; j < indexArr.length; j++) {
                    if (!valuesArr.includes(indexArr[j][1])) {
                        valuesArr.push(indexArr[j][1])
                    }
                }
            }
        }
        return valuesArr
    }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            let indexArr = this.keyMap[i]
            if (indexArr) {
                for (let j = 0; j < indexArr.length; j++) {
                    if (!keysArr.includes(indexArr[j][0])) {
                        keysArr.push(indexArr[j][0])
                    }
                }
            }
        }
        return keysArr
    }
}

const hashMap = new HashMap(17);
hashMap.setItem("pink", "yooooo")
hashMap.setItem("pink", "wassup")
hashMap.setItem("aqua", "agua")
console.log(hashMap)