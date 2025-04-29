// Complete the function to properly use stack operations for parenthesis matching
function isValidExpression(expression) {
  let stack = [];
  for (let char of expression) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      // TODO: Determine if the stack is empty OR the last character does not match the corresponding opening character
      // console.log(char ,  stack)
      if (stack.length > 0) {
        if ((char === '}' && stack[stack.length - 1] === '{') ||
          (char === ']' && stack[stack.length - 1] ==='[') ||
            (char === ')' && stack[stack.length - 1] === '('))
        {
          stack.pop();
        }
      } else {
        return false
      }
    }
    // TODO: What to do if the `char` is not a parenthesis?
  }
  // TODO: Check if the stack is empty, indicating that the expression is balanced
  return stack.length > 0 ? false : true;  // Modify this line appropriately
}

// Example usage
let sampleExpression = "([a+b]{c+d})";
console.log(isValidExpression(sampleExpression));  // Expected output: true

let badExpression = "([a+b]{c+d}))";
console.log(isValidExpression(badExpression));  // Expected output: false
