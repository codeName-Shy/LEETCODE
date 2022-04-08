/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let rock = stones.split('')
    return jewels.split('').map(jewel => rock.filter(stone=> stone === jewel).length).reduce((a,b) => a +b)
};