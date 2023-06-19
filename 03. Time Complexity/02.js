function solution(A) {
  const N = A.length + 1;
  const expectedSum = (N * (N + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < A.length; i++) {
    actualSum += A[i];
  }

  return expectedSum - actualSum;
}
