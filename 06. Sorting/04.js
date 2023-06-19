function solution(A) {
  const N = A.length;
  const leftEdges = new Array(N).fill(0);
  const rightEdges = new Array(N).fill(0);
  let intersectCount = 0;

  for (let i = 0; i < N; i++) {
    const leftEdge = Math.max(0, i - A[i]);
    const rightEdge = Math.min(N - 1, i + A[i]);
    leftEdges[leftEdge]++;
    rightEdges[rightEdge]++;
  }

  let activeDiscs = 0;

  for (let i = 0; i < N; i++) {
    intersectCount += activeDiscs * leftEdges[i];

    if (intersectCount > 10000000) {
      return -1;
    }

    intersectCount += (leftEdges[i] * (leftEdges[i] - 1)) / 2;

    if (intersectCount > 10000000) {
      return -1;
    }

    activeDiscs += leftEdges[i];
    activeDiscs -= rightEdges[i];
  }

  return intersectCount;
}
