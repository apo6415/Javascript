function maxProfitInStocks(prices) {
  let minPrice = Number.MAX_VALUE;
  let mexProfit = 0;

  for (const price of prices) {
    console.log(mexProfit)
    minPrice = Math.min(minPrice, price);
    mexProfit = Math.max(mexProfit, price - minPrice)
    console.log(price, ' ', minPrice, ' ->>> ', mexProfit )
  }

  return {minPrice, mexProfit};
}

const nums = [310,315,275,290, 260,270, 290,230, 255,250];
const newLength = maxProfitInStocks(nums);

console.log(newLength); // Output: 5
