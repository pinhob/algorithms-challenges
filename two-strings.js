// challenge: https://www.hackerrank.com/challenges/two-strings/problem

// using hashs - O(n)
function twoStrings(s1, s2) {
    const s1Chars = {}
    const s2Chars = {}
    let pointer = 0;
    
    const biggestLength = s1.length > s2.length ? s1.length : s2.length;
    
    while (pointer < biggestLength) {        
        if (pointer < s1.length) {
            s1Chars[s1[pointer]] = true
        }
        
        if (pointer < s2.length) {
            s2Chars[s2[pointer]] = true
        }
        
        if (s2Chars[s1[pointer]] || s1Chars[s2[pointer]]) {
            return "YES"
        }
        
        pointer++;
    }
    
    return "NO"
}

// brute force that timeout some tests - O(n²)
function twoStrings(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] == s2[j]) {
                return "YES" 
            }  
        }
    }
    return "NO"
}
