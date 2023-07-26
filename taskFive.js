/* Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, , /) as input and return the result of the operation. */

  function calc(a, b, operator) {
    if (
      typeof a !== "number" ||
      typeof b !== "number"
    ) {
      return "invalid Number";
    }
    if (operator == "+") {
      return a + b;
    } else if (operator == "-") {
      return a - b;
    } else if (operator == "*") {
      return a * b;
    } else if (operator == "/") {
      return a / b;
    }else{
        return "Invalid Operator";
    }
  }
  console.log(calc(5, 7, "-"));