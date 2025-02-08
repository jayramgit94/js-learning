/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minPrice = Infinity; // Start with the largest possible value
   let maxProfit = 0;       // Start with no profit

   for (let price of prices) {
       if (price < minPrice) {
           minPrice = price; // Update the minimum price
       } else {
           const profit = price - minPrice; // Calculate profit
           maxProfit = Math.max(maxProfit, profit); // Update max profit
       }
   }

   return maxProfit;
};