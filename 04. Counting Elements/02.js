function solution(A) {
  N = A.length;
  current_sum = 0;
  expected_sum = (N * (N + 1)) / 2;
  is_present = new Array(N).fill(false);

  for (let i = 0; i < N; i++) {
    if (A[i] < 1 || A[i] > N || is_present[A[i] - 1] === true) {
      return 0;
    } else {
      is_present[A[i] - 1] = true;
      current_sum += A[i];
    }
  }

  if (expected_sum === current_sum) {
    return 1;
  } else {
    return 0;
  }
}
