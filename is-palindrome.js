// from: https://neetcode.io/problems/is-palindrome

/**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphanumS = s
            .split('')
            .filter(ch =>  /^[A-Za-z0-9]$/i.test(ch))
            .join('')
            .toLowerCase()
        let l = 0;
        let r = alphanumS.length - 1;

        while (l < r) {
            if (alphanumS[l] !== alphanumS[r]) {
                return false
            }
            l++;
            r--;
        }
        
        return true
    }
