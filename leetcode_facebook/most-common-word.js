var mostCommonWord = function(paragraph, b) {
    let ban = {};
    let seen = {};
    let result = {key: '', times: 0};
    paragraph = paragraph.toLowerCase();
    let pg = paragraph.split(/[^A-Za-z]/);
    console.log(pg);
    for(let j = 0; j < b.length; j++) {
        ban[b[j]] = true;
    }
    for(let i = 0; i < pg.length; i++) {
        if(!pg[i] || ban[pg[i]]) {
            continue;
        } else {
            if(seen[pg[i]] === undefined) seen[pg[i]] = 0;
            seen[pg[i]] += 1;
            if (result.times <  seen[pg[i]]) {
                result = {key: pg[i], times: seen[pg[i]]};   
            }
        }
    }
    console.log(result);
    return result.key;
};

mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]);