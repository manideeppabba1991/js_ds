class Hashtable {
    constructor(size = 10) {
        this.keyMap = new Array(size);
    }

    __hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const value = key[i].charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        key = key.toLowerCase()
        const key_hash = this.__hash(key);

        if (!this.keyMap[key_hash]) {
            this.keyMap[key_hash] = [];
        } else { // check if key value pair already exists
            for (let i = 0; i < this.keyMap[key_hash].length; i++) {
                if (this.keyMap[key_hash][i][0] === key) {
                    this.keyMap[key_hash][i][1] = value;
                    return; // break whole function when it updates the existing key value pair
                }
            }
        }
        this.keyMap[key_hash].push([key, value]); // push if no key value pair found
    }

    get(key) {
        key = key.toLowerCase()
        const key_hash = this.__hash(key);
        let result = null;
        if (this.keyMap[key_hash]) {
            for (let i = 0; i < this.keyMap[key_hash].length; i++) {
                if (this.keyMap[key_hash][i][0] === key) {
                    result = this.keyMap[key_hash][i][1];
                    break;
                }
            }
        }
        return result !== null ? result : undefined;
    }

    keys() {
        let result = [];
        if (this.keyMap) {
            for (let i = 0; i < this.keyMap.length; i++) {
                if (this.keyMap[i]) {
                    for (let j = 0; j < this.keyMap[i].length; j++) {
                        result.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return result;
    }

    values() {
        let result = [];
        if (this.keyMap) {
            for (let i = 0; i < this.keyMap.length; i++) {
                if (this.keyMap[i]) {
                    for (let j = 0; j < this.keyMap[i].length; j++) {
                        if (!result.includes(this.keyMap[i][j][1])) {
                            result.push(this.keyMap[i][j][1]);
                        }
                    }
                }
            }
        }
        return result;
    }
}

module.exports = Hashtable;