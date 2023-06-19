function solution(N) {
  let count = 0;
  let i = 1;

  while (i * i <= N) {
    if (N % i === 0) {
      count++;

      if (i !== N / i) {
        count++;
      }
    }
    i++;
  }

  return count;
}
