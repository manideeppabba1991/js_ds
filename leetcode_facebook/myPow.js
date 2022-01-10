var myPow = function(x, n) {
    const pow = (x, n) => {
        if(n === 0) return 1;
        return x * myPow(x, n-1);
    };

    if(n < 0) {
        n = -1 * n;
        return (1 / pow(x, n));
    }
    return pow(x,n);

};

console.log(myPow(2, -2));