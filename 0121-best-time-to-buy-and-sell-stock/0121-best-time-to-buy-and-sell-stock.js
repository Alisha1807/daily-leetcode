/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let minProfit =prices[0];
    let maxiProfit =0;
    for(let i=1; i<prices.length; i++){
        if(prices[i]-minProfit > maxiProfit){
            maxiProfit = prices[i]-minProfit;
        }
        if(prices[i]<minProfit){
            minProfit=prices[i]
        }    
    }
    return maxiProfit;
};

let pricesArray= [7,1,5,3,6,4];
console.log(maxProfit(pricesArray));