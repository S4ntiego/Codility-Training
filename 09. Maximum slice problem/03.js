function solution(A) {
  const N = A.length;
  const maxEndingHere = new Array(N).fill(0);
  const maxStartingHere = new Array(N).fill(0);

  for (let i = 1; i < N - 1; i++) {
    maxEndingHere[i] = Math.max(maxEndingHere[i - 1] + A[i], 0);
  }

  for (let i = N - 2; i > 0; i--) {
    maxStartingHere[i] = Math.max(maxStartingHere[i + 1] + A[i], 0);
  }

  let maxSum = 0;
  for (let i = 1; i < N - 1; i++) {
    maxSum = Math.max(maxSum, maxEndingHere[i - 1] + maxStartingHere[i + 1]);
  }

  return maxSum;
}
