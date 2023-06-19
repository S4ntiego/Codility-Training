function solution(A) {
  A.sort((a, b) => a - b);
  positive = [];
  for (number of A) {
    if (number >= 0) {
      positive.push(number);
    }
  }
  for (let i = 2; i < positive.length; i++) {
    if (
      positive[i - 2] + positive[i - 1] > positive[i] &&
      positive[i - 2] < positive[i - 1] + positive[i] &&
      positive[i - 1] < positive[i - 2] + positive[i]
    ) {
      return 1;
    }
  }

  return 0;
}
