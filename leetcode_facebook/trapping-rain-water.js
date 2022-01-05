var trap1 = function(height) {
    let maxR = 0;
    let maxL = 0;
    let score = 0;
    
    for(let p = 0; p < height.length; p++) {
        maxR = 0;
        maxL = 0;
        for(let l = p - 1; l > -1; l--) {
            maxL = Math.max(maxL, height[l]);
        }
        for (let r = p + 1; r < height.length; r++) {
            maxR = Math.max(maxR, height[r]);
        }
        let s = Math.min(maxL, maxR) - height[p];
        score += s > 0 ? s : 0;
    }
    return score;
};
// optimized
var trap = function(height) {
    let score = 0;
    let maxR = 0, maxL = 0;
    let p1 = 0, p2 = height.length - 1;
    while(p1 < p2) {
        if(height[p1] <= height[p2]) {
            if(maxL > height[p1]) score += maxL - height[p1];
            else maxL = height[p1];
            p1++;
        } else {
            if(maxR > height[p2]) score += maxR - height[p2];
            else maxR = height[p2];
            p2--;
        }
    }
    console.log(`s: ${score}`);
    return score;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1]);