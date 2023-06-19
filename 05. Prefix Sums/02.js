function solution(A, B, K) {
  let countB = Math.floor(B / K);
  let countA = Math.floor((A - 1) / K);
  let count = countB - countA;
  return count;
}
