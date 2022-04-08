/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    // separate each digit 
    let eachDigit =n.toString().split('').map(num => Number(num))
    // get sum
    let sum = eachDigit.reduce((a, b)=> {return a + b})
    // get product 
    let product = eachDigit.reduce((a, b)=> {return a * b})
    // get the difference between product and sum
    let difference = product - sum;
    return difference
};