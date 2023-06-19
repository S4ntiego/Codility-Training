function solution(A, B) {
  const N = A.length;
  let aliveCount = N;
  let downstreamFish = [];

  for (let i = 0; i < N; i++) {
    if (B[i] === 1) {
      downstreamFish.push(A[i]);
    } else {
      while (downstreamFish.length > 0) {
        if (A[i] > downstreamFish[downstreamFish.length - 1]) {
          downstreamFish.pop();
          aliveCount--;
        } else {
          aliveCount--;
          break;
        }
      }
    }
  }

  return aliveCount;
}
