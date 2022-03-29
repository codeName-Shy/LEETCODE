/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let i = 0;
    let ans = []
    for(i = 0; i<nums.length; i++){
        ans.push(nums[nums[i]])
    }
    return ans
};