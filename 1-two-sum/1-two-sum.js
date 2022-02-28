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
         // if index2 is not null return the current index and the index of the findNumber from the nums
        if(index2 != null){
            return [index2,i]
        }
        else{
            previousValues[currentNumber] = i
        }
    }
};


