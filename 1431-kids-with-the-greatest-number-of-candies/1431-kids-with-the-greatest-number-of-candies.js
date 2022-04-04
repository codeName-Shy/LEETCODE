/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandy = Math.max(...candies)
    // return true if current kid's candies + extraCandies has equal or greater than maxCandy
    return candies.map(kid => kid + extraCandies >= maxCandy)
};