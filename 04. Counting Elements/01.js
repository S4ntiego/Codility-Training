function solution(X, A) {
  let coveredPositions = new Set();

  for (let i = 0; i < A.length; i++) {
    const position = A[i];

    if (position <= X) {
      coveredPositions.add(position);

      if (coveredPositions.size === X) {
        return i;
      }
    }
  }

  return -1;
}
