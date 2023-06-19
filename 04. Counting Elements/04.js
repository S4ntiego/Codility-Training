function solution(A) {
  const positiveNumbers = new Set();

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      positiveNumbers.add(A[i]);
    }
  }

  for (let i = 1; i <= positiveNumbers.size + 1; i++) {
    if (!positiveNumbers.has(i)) {
      return i;
    }
  }

  return 1;
}
