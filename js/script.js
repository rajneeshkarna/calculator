function add (numOne, numTwo) {
  return numOne + numTwo;
}

function sub (numOne, numTwo) {
  return numOne - numTwo;
}

function multiply (numOne, numTwo) {
  return numOne * numTwo;
}

function divide (numOne, numTwo) {
  return numOne / numTwo;
}

let firstNumber = 2;
let operator = '+';
let secondNumber = 3;

function operate(operator, firstNumber, secondNumber) {
  switch(operator){
    case '+':
      return add(firstNumber, secondNumber);
      break
    case '-':
      return sub(firstNumber, secondNumber)
      break
    case '*':
      return multiply(firstNumber, secondNumber)
      break
    case '/':
      return divide(firstNumber, secondNumber)
  }
}