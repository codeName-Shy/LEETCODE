/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.indexOf(target) >-1){
        return nums.indexOf(target)

    } else if(nums.indexOf(target) < 0){
        return nums.concat(target).sort(function(a, b){return a-b}).indexOf(target)
    }
};
