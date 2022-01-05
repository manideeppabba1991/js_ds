var backspaceCompare = function(s, t) {
    let p1 = s.length - 1, p2 = t.length -1;
    let sCount = 0, tCount = 0;
    while(p1 > -1 || p2 > -1) {
        if(s[p1] !== "#" && t[p2] !== "#") {
            if(!sCount && !tCount) {
                if(s[p1] === t[p2]) {
                    p1--;
                    p2--;
                    continue;
                }
                else {
                    return false;
                }
            } else {
                if (sCount) {
                    sCount--;
                    p1--;
                }
                if(tCount) {
                    tCount--;
                    p2--;
                }
            }
        }
        if(s[p1] === "#") {
            sCount++;
            p1--;
        }
        if(t[p2] === "#") {
            tCount++;
            p2--;
        }
    }
    return !!(p1 < 0 && p2 < 0);
};

backspaceCompare("xywrrmp", "xywrrmu#p");