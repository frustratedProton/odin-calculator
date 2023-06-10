function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}


function operate(firstNum, operator, secondNum) {
    firstNum = Number(firstNum)
    secondNum = Number(secondNum)

    switch (operator) {
        case '+':
          return add(firstNum, secondNum)
        case '-':
          return subtract(firstNum, secondNum)
        case 'x':
          return multiply(firstNum, secondNum)
        case '÷':
          if (b === 0) return null
          else return divide(firstNum, secondNum)
        default:
          return null
      }
}