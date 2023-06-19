function solution(H) {
  var stack = [];
  var blocksNeeded = 0;

  for (var i = 0; i < H.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
      stack.pop();
      blocksNeeded++;
    }

    if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
    }
  }

  blocksNeeded += stack.length;

  return blocksNeeded;
}
