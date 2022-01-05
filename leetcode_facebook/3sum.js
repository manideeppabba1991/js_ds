var threeSum = function(nums) {
    let result = [];
    let p1 = 0;
    while(p1 + 2 < nums.length) {
        if(nums[p1] + nums[p1 + 1] + nums[p1 + 2] === 0) {
            result.push(nums[p1], nums[p1+1], nums[p1+2]);
        }
        p1++;
    }
    console.log(result);
    return result;
};

threeSum([-1,0,1,2,-1,-4]);