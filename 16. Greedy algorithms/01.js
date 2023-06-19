function solution(A, B) {
  const N = A.length;
  let nonOverlappingCount = 0;
  let lastEnd = -1;

  for (let i = 0; i < N; i++) {
    if (A[i] > lastEnd) {
      nonOverlappingCount++;
      lastEnd = B[i];
    }
  }

  return nonOverlappingCount;
}
