/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a = 0;
    let b = 0;
    for(let i = 0; i < nums.length ; i++){
      for(let j = i + 1; j < nums.length; j++){
          if (nums[i] + nums[j] === target) {
            a = i
            b = j
            break;
          }
      }
    } 
    return [a,b]
};