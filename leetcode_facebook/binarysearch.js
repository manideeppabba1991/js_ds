const binarysearch = (array, k) => {
    let i = 0;
    let j = array.length - 1;
    while(i <= j) {
        const pivot = Math.floor((i + j)/2);
        const foundVal = array[pivot];
        if(foundVal === k) {
            console.log(pivot);
            return pivot;
        } else if (foundVal < k) {
            i = pivot + 1;
        } else {
            j = pivot - 1;
        }
    }
    console.log(-1);
    return -1;
};

binarysearch([1,2,5,8,9,11,16], 12);
binarysearch([1,2,5,8,9,11,16], 2);
binarysearch([1,2,5,8,9,11,16], 5);
binarysearch([1,2,5,8,9,11,16], 6);
binarysearch([1,2,5,8,9,11,16], 16);
binarysearch([1,2,5,8,9,11,16], 19);
