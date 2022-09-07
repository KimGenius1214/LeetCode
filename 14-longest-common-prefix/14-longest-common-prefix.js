/**
 * @param {string[]} strs
 * @return {string}
 */

function LCP(left, right) {
  let prefix = left;

  while (right.indexOf(prefix) !== 0) {
    prefix = prefix.slice(0, prefix.length - 1);
    if (prefix === "") break;
  }

  return prefix;
}


var longestCommonPrefix = function(strs) {
    let answer = strs[0];
    
    for(let str of strs){
        answer = LCP(answer, str);
        if(answer === "") break;
    }
    
    return answer
};