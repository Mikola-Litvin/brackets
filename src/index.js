module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];
  let stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.indexOf(str[i]) != -1 && closeBrackets.indexOf(str[i]) == -1) {
      stack.push(str[i]);
    }
    else if (openBrackets.indexOf(str[i]) != -1 && closeBrackets.indexOf(str[i]) != -1) {
      if (stack[stack.length - 1] == str[i]) {
        stack.pop();
      }
      else {
        stack.push(str[i]);
      }
    }
    else if (closeBrackets.indexOf(str[i]) != -1 && openBrackets.indexOf(str[i]) == -1) {
      if (openBrackets.indexOf(stack.pop()) != closeBrackets.indexOf(str[i])) return false;
    }
  }
  if (stack.length != 0) {
    return false;
  }
  return true;
}
