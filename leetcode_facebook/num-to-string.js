var numberToWords = function(num) {
    const facts = {1: 'One', '2': 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eigth', 9: 'Nine', 10: 'Ten', 11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen', 20: 'Twenty', 30: 'Thirty', 40: 'Forty', 50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty', 90: 'Ninety', 100: 'Hundred', 1000: 'Thousand', 1000000: 'Million', 1000000000: 'Billion', 1000000000000: 'Trillion'};
    let result = '';
    let count = 1;
    //12,345
    while(num) {
        let curr = num % Math.pow(10, count);
        if(num <= 20) {
            result = facts[num] + " " + result;
            break;
        } else if(curr < 100) {
            result = facts[curr] + " " + result;
        } else if (curr <= 900) {
            const units = Math.pow(10, count - 1);
            let multiplier = curr/units;
            result = facts[multiplier] + " " + facts[units] + " " + result;
        } else  {
            const unitsMultiplier = Math.ceil(count/3);
            const units = Math.pow(10, 3*(unitsMultiplier-1));
            curr = num % Math.pow(10, units);
            multiplier = curr / units;
            result = numberToWords(multiplier) + " " + facts[units] + " " + result;
        }
        num = num - curr;
        count++;
    }
    console.log(result)

    return result.trim();
};

// numberToWords(12345);
numberToWords(9634568);