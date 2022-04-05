/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let arrOfDigits = Array.from(String(num), Number);
    let sortedDigit = arrOfDigits.sort();
    let first = sortedDigit[0].toString()
    let second = sortedDigit[1].toString()
    let third = sortedDigit[2].toString()
    let fourth = sortedDigit[3].toString()
    let newInt1 = Number(first.concat(third))
    let newInt2 = Number(second.concat(fourth))
    return newInt1 + newInt2

};