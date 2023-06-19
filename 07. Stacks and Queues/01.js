function solution(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return 0;
      }

      const top = stack.pop();

      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return 0;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}
