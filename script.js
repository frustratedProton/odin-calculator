let firstOp = '';
let secondOp = '';
let currentOperation = null;
let doClrSrn = false;

const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const decimalBtn = document.getElementById('decimal');
const lastOperationScreen = document.querySelector('.user-input');
const currentOperationScreen = document.querySelector('.result');

// adding eventListener for running functions
equalBtn.addEventListener('click', evaluate);
clearBtn.addEventListener('click', clear);
deleteBtn.addEventListener('click', deleteNum);
decimalBtn.addEventListener('click', addDecimal);

numbers.forEach((button) =>
  button.addEventListener('click', () => appendNumbers(button.textContent))
)

operators.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

// clearing screen for next operation
function ClearScreen() {
  currentOperationScreen.textContent = '';
  doClrSrn = false;
}

// adding numbers
function appendNumbers(number) {
  if(currentOperationScreen.textContent === '0' || doClrSrn)
      ClearScreen();

  currentOperationScreen.textContent += number;
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate()
  firstOp = currentOperationScreen.textContent
  currentOperation = operator
  lastOperationScreen.textContent = `${firstOp} ${currentOperation}`
  doClrSrn = true;
}

function clear() {
  currentOperationScreen.textContent = '0'
  lastOperationScreen.textContent = ''
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
}


function evaluate() {
  if (currentOperation === null || doClrSrn) return

  if(currentOperation === '÷' && currentOperationScreen.textContent === '0') {
    alert('Error: Cannot divide by 0');
    return;
  }

  secondOp = currentOperationScreen.textContent
  currentOperationScreen.textContent = Math.floor(operate(firstOp, currentOperation, secondOp) * 1000) / 1000
  console.log(firstOp)

  lastOperationScreen.textContent = `${firstOp} ${currentOperation} ${secondOp}`
  currentOperation = null
}


function deleteNum() {
  currentOperationScreen.textContent = currentOperationScreen.textContent.toString()
                                        .slice(0, -1); // might remove toString later
}


function addDecimal() {
  if(doClrSrn) ClearScreen();

  if (currentOperationScreen.textContent === '')
    currentOperationScreen.textContent = '0'
  if (currentOperationScreen.textContent.includes('.')) return   // checks for decimal
  currentOperationScreen.textContent += '.'                      // if not found; add decimal
}

// Operate Function for basic arith operations
function operate(firstNum, operator, secondNum) {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  switch (operator) {
    case '+':
      return add(firstNum, secondNum)
    case '−':
      return subtract(firstNum, secondNum)
    case '×':
      return multiply(firstNum, secondNum)
    case '÷':
      if (secondNum === 0) return null
      else return divide(firstNum, secondNum)
    default:
      return null
  }
}

// Basic Arithmetic Operations
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
