const binarySearch = (array, left, right, target) => {
    while(left <= right) {
        const mid = Math.floor((left+right)/2);
        if(array[mid] === target) {
            return mid;
        } else if (target > array[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const startAndEndOfTarget = (nums,t) => {
    // Step1: find out target by binary search
    const firstPos = binarySearch(nums, 0, nums.length - 1, t);
    if(firstPos === -1) return [-1, -1];
    let startPos = firstPos, endPos = firstPos;
    let temp = startPos;

    // Figure out startPos by binary search on left of firstPos
    while(startPos !== -1) {
        temp = startPos;
        startPos = binarySearch(nums, 0, startPos - 1, t);
    }
    startPos = temp;

    //Figure our end position by binary search on right of firstPos
    while(endPos !== -1) {
        temp = endPos;
        endPos = binarySearch(nums, endPos+1, nums.length -1, t);
    }
    endPos = temp;

    return [startPos, endPos];
}

console.log(startAndEndOfTarget([1,2,4,4,4,6,7,8,9], 3)); // [-1, -1]
console.log(startAndEndOfTarget([1,2,4,4,4,6,7,8,9], 4)); // [2, 4]
console.log(startAndEndOfTarget([1,2,4,4,4,6,7,8,9], 6)); // [5, 5]
console.log(startAndEndOfTarget([1,2,4,4,4,6,7,8,9], 1)); // [0, 0]
console.log(startAndEndOfTarget([1,2,4,4,4,6,7,8,9], 5)); // [-1, -1]
console.log(startAndEndOfTarget([4,4,4,4], 4)); // [0, 3]