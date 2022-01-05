/* 
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

// Approach 1: without using javascript in built string methods 

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let frequency = {};
    let count = 0;
    if (s && s.length) {
        let i = 0;
        let j = i + 1;
        frequency[s[i]] = i;
        while(j < s.length) {
            if (typeof frequency[s[j]] === "number" && frequency[s[j]] >= i) {
                count = Math.max((j - i), count);
                i = frequency[s[j]] + 1;
            }
            frequency[s[j]] = j;
            j++;
        }
        count = Math.max(((s.length) - i), count);
    }
    
    return count;
};

// Approach 2: Using javascript method:

// 1. take empty string, 2. iterate over each character and if next character is not ".includes()" included in string .. add it to string, store the max on each iteration && iterate ++. 2. if match found, slice first character and dont do i++.