/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const previousValues = {};
    for(let i = 0; i < nums.length; i++){
        let currentNumber = nums[i];
        let findNumber = target - currentNumber;
        let index2 = previousValues[findNumber]
        if(index2 != null){
            // console.log([index2, i])
            return [index2,i]
        }
        else{
            previousValues[currentNumber] = i
        }
    }
};


