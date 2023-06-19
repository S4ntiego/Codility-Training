function solution(S) {
  var stack = [];

  for (var i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      stack.push("(");
    } else if (S[i] === ")") {
      if (stack.length === 0) {
        return 0;
      }
      stack.pop();
    }
  }

  if (stack.length > 0) {
    return 0;
  }

  return 1;
}
