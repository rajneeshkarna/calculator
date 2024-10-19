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

let displayValue = '';

function updateDisplay() {
    document.querySelector('.display').textContent = displayValue;
}

document.getElementById('btn-1').addEventListener('click', function() {
    displayValue += '1';
    updateDisplay();
});

document.getElementById('btn-2').addEventListener('click', function() {
    displayValue += '2';
    updateDisplay();
});

document.getElementById('btn-3').addEventListener('click', function() {
    displayValue += '3';
    updateDisplay();
});

document.getElementById('btn-4').addEventListener('click', function() {
    displayValue += '4';
    updateDisplay();
});

document.getElementById('btn-5').addEventListener('click', function() {
  displayValue += '5';
  updateDisplay();
});

document.getElementById('btn-6').addEventListener('click', function() {
  displayValue += '6';
  updateDisplay();
});

document.getElementById('btn-7').addEventListener('click', function() {
  displayValue += '7';
  updateDisplay();
});

document.getElementById('btn-8').addEventListener('click', function() {
  displayValue += '8';
  updateDisplay();
});

document.getElementById('btn-9').addEventListener('click', function() {
  displayValue += '9';
  updateDisplay();
});

document.getElementById('btn-0').addEventListener('click', function() {
  displayValue += '0';
  updateDisplay();
});

document.querySelector('.clear-btn').addEventListener('click', function() {
    displayValue = ''; 
    updateDisplay();
});

updateDisplay();
