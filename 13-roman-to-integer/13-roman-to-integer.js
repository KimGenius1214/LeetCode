/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
              }
    let sum = 0;
    let preTxt = s.substring[0,1];
    
    for(let i = 0; i<s.length; i++){
        let curTxt = s.substring(i, i + 1);
        
        let preNum = obj[preTxt];
        let curNum = obj[curTxt];
        
        if(curNum > preNum){
            let temp = curNum - preNum;
            sum -= preNum;
            sum += temp;
        }else{
            sum += obj[curTxt]
        }
        
        preTxt = curTxt
    }
    
    return sum
    
};