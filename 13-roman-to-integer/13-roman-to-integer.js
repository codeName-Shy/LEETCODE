/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s){
    const numerals = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000 
    }
   if (s.split('').length === 1){
        return numerals[s]
    } else{
    let result = s.split('').map((currentNumeral, index) => {
        // return numerals[s[index]]  numerals[s[index-1]]
              if(numerals[s[index]] > numerals[s[index-1]]){
                        return 0
                }
              else if(numerals[s[index]] >= numerals[s[index+1]] || numerals[s[index]] >= numerals[s[index-1]]){
                    return numerals[s[index]]
                }
              else if(numerals[s[index]] < numerals[s[index+1]]){
                    return numerals[s[index+1]] - numerals[s[index]]
              }
              else if(numerals[s[index]] < numerals[s[index-1]]){
                    return numerals[s[index]]
              }
        })
        .reduce(
            (previousValue, currentValue) => previousValue + currentValue
          )

    return result}
    
}