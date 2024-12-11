// from: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// first and ugly submission:
var removeDuplicates = function(nums) {
    let p1 = 0;
    let p2 = p1 + 1;

    while (p2 < nums.length) {
        if (p1 !== p2 && nums[p1] === nums[p2]) {
            nums.splice(p2, 1);
        } else if (p1 === p2)  {
            p2++;
        } else {
            p1++;
        }
    }
    
    return nums.length
};

// second submission: 
var removeDuplicates = function(nums) {
    let slow = 0;
    let fast = 1;

    while (fast < nums.length) {
        if (nums[slow] === nums[fast]) {
            fast += 1
        } else {
            nums[slow+1] = nums[fast]
            fast += 1
            slow += 1
        }
    }
    
    return slow + 1
};
