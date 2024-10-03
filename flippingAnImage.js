// https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function(image) {
    return image.map(row => {
        let left = 0;
        let right = row.length - 1;

        while (left <= right) {
            const temp = row[right]
            row[right] = row[left] === 1 ? 0 : 1;
            row[left] = temp === 1 ? 0 : 1;
            left++;
            right--;
        }

        return row
    })
};
