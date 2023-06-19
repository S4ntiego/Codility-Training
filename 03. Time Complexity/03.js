function solution(A) {
  let leftSum = A[0];
  let rightSum = A.slice(1).reduce((acc, val) => acc + val, 0);
  let minDiff = Math.abs(leftSum - rightSum);

  for (let i = 1; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    const diff = Math.abs(leftSum - rightSum);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}
