function solution(N, A) {
  let counters = new Array(N).fill(0);
  let maxCounter = 0;
  let baseValue = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      if (counters[A[i] - 1] < baseValue) {
        counters[A[i] - 1] = baseValue;
      }
      counters[A[i] - 1]++;
      if (counters[A[i] - 1] > maxCounter) {
        maxCounter = counters[A[i] - 1];
      }
    } else if (A[i] === N + 1) {
      baseValue = maxCounter;
    }
  }

  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < baseValue) {
      counters[i] = baseValue;
    }
  }

  return counters;
}
