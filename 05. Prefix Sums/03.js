function solution(S, P, Q) {
  const impactFactors = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  slices = [];
  final_array = [];

  for (let i = 0; i < P.length; i++) {
    slices.push(S.slice(P[i], Q[i] + 1));
  }

  for (let i = 0; i < slices.length; i++) {
    for (factor in impactFactors) {
      if (slices[i].includes(factor)) {
        final_array.push(impactFactors[factor]);
        break;
      }
    }
  }

  return final_array;
}
