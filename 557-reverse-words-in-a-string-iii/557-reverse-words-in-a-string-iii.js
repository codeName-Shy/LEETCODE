/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(sentence) {
    return sentence.split(' ').map(word=> { return word.split('').reverse().join('')}).join(' ')
};