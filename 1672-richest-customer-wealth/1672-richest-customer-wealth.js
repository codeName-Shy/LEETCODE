/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
return Math.max(...accounts.map(acc => acc.reduce((prev, cur)=>{
        return prev + cur
       },0)))
    
};