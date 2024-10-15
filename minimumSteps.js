// https://leetcode.com/problems/separate-black-and-white-balls/

/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let swaps = 0;
    let blackBallCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "0")  {
            swaps += blackBallCount;
        } else {
            blackBallCount++;
        }
    }

    return swaps
};


// using two pointer
var minimumSteps = function(s) {
    let swaps = 0;
    let white_position = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "0")  {
            swaps += i - white_position;
            white_position++;
        }
    }

    return swaps
};
