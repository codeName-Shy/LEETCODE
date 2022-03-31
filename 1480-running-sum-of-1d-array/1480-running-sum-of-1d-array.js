/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
 return  nums.map((num, index) => {
        
        // if index is zero return the original value
        // else: add everything from the index 0 to current index
        if (index > 0){
            return nums.slice(0, index + 1).reduce((prev, curr)=>{
                return prev + curr
            }, 0)
        } else if(index === 0){
            return num
        }
    })
    
};