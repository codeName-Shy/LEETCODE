/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start=1; 
        let end=n; 
// As long as the start is less than or equal to end
        while(start <= end){ 
            // Look for the mid index by summing up the start and end, then divide it by 2, then round it off
            let mid=Math.floor((start + end)/2); 
            if (isBadVersion(mid)){
            // If the mid is a bad version then check the versions before the mid version whether they are bad or good
                end = mid - 1;
            } else {
             // If the mid is a good version then check the versions after the mid version whether they are bad or good   
                start = mid + 1;
            }    
        }
        // Start is on top of first bad instance
        return start;
    };
};