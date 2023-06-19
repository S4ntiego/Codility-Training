function solution(A) {
  A.sort((a, b) => a - b);

  const n = A.length;
  const lastTriplet = A[n - 1] * A[n - 2] * A[n - 3];
  const firstTwoLast = A[0] * A[1] * A[n - 1];

  return Math.max(lastTriplet, firstTwoLast);
}
