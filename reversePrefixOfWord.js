// https://leetcode.com/problems/reverse-prefix-of-word/

// JS WAY
var reversePrefix = function(word, ch) {
    const chIdx = word.indexOf(ch);

    const reverseSubStr = word.substring(0, chIdx + 1).split('').reverse().join('');
    const restSubStr = word.substring(chIdx + 1);

    return reverseSubStr + restSubStr;
};

// TWO POINTERS
var reversePrefix = function(word, ch) {
    let left = 0; 
    let right = word.indexOf(ch);
    let reversed = word.split('');

    while (left < right) {
        let tempRight = word[right];
        reversed[right] = reversed[left];
        reversed[left] = tempRight;
        left++;
        right--;
    }

    return reversed.join('')
};
