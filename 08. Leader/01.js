function solution(A) {
  const count = {};

  for (let i = 0; i < A.length; i++) {
    count[A[i]] = count[A[i]] + 1 || 1;
  }

  let leader = null;

  for (const [key, value] of Object.entries(count)) {
    if (value > A.length / 2) {
      leader = key;
      leaderCount = value;
      break;
    }
  }

  return A.indexOf(parseInt(leader));
}
