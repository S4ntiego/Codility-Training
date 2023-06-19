function solution(A) {
  let maxProfit = 0;
  let minPrice = A[0];

  for (let i = 1; i < A.length; i++) {
    const currentPrice = A[i];

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }

    if (currentPrice > minPrice) {
      const currentProfit = currentPrice - minPrice;
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }

  return maxProfit;
}
