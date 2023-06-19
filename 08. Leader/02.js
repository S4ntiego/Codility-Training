function solution(A) {
  const count = new Map();
  let equiLeaders = 0;

  for (let i = 0; i < A.length; i++) {
    if (count.has(A[i])) {
      count.set(A[i], count.get(A[i]) + 1);
    } else {
      count.set(A[i], 1);
    }
  }

  let leader = null;
  let leaderCount = 0;

  for (const [key, value] of count.entries()) {
    if (value > A.length / 2) {
      leader = key;
      leaderCount = value;
      break;
    }
  }

  if (leader === null) {
    return 0;
  }

  let leftLeaders = 0;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === leader) {
      leftLeaders++;
    }

    const remainingLeaders = leaderCount - leftLeaders;

    if (
      leftLeaders > (i + 1) / 2 &&
      remainingLeaders > (A.length - (i + 1)) / 2
    ) {
      equiLeaders++;
    }
  }

  return equiLeaders;
}
