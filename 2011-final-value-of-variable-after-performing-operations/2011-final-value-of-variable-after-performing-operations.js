/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.map(one =>{ 
        switch(one){
        case("X++"):
            return 1
            break;
        case("++X"):
            return 1
            break;
        case("--X"):
            return -1
            break;   
        case("X--"):
            return -1
            break;    
    }}).reduce((prev, cur)=>{
        return prev+cur
    }
    )
};