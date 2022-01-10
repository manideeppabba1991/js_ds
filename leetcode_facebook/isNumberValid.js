const isNumberValid = (str, isSignAllowed) => {
    let sign = false;
    let num = null;
    for(let i = 0; i<str.length; i++) {
        let char = str[i].charCodeAt(0);
        if(char >= 48 && char <= 57) {
            if(num === null) num = char - 48;
            else num = num * 10 + (char - 48);
        } else if(str[i] === "+" || str[i] === "-") {
            if(num === null && isSignAllowed && !sign) {
                sign = true;
                continue;
            }
            else return false;
        } else {
            return false;
        }
    }
    return num !== null;
}

console.log(isNumberValid("-123", true)); // true
console.log(isNumberValid("123", true)); // true
console.log(isNumberValid("+123", true)); // true
console.log(isNumberValid("+123-", true)); // false
console.log(isNumberValid("-", true)); // false
console.log(isNumberValid("--1", true)); // false
console.log(isNumberValid("-+1", true)); // false
console.log(isNumberValid("1-", true)); // false
