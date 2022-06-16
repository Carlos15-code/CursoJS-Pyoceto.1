const defaultResult = 0;
let currentResult = 0;
let logEntries = [];

// Get the user INput
function getUserInput() {
  return +userInput.value;
}

// Generates and writes calculation log
function logIt(resultBefore, operator, calcNumber) {
  const descriptionCalc = `${resultBefore} ${operator} ${calcNumber} `;
  outputResult(currentResult, descriptionCalc);
}

function writeLog(operationId, prevRes, opNumber, newResult) {
  const logEntry = {
    operation: operationId,
    previousResult: prevRes,
    number: opNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  if (
    calculationType !== 'add' &&
    calculationType !== 'substract' &&
    calculationType !== 'multiply' &&
    calculationType !== 'divide' || 
    !enteredNumber
  ) {
    return;
  }

  // if (
  //   calculationType === 'add' ||
  //   calculationType === 'substract' ||
  //   calculationType === 'multiply' ||
  //   calculationType === 'divide'
  // ) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let mathOp;
    if (calculationType === 'add') {
      currentResult += enteredNumber;
      mathOp = '+';
    } else if (calculationType === 'substract') {
      currentResult -= enteredNumber;
      mathOp = '-';
    } else if (calculationType === 'multiply') {
      currentResult *= enteredNumber;
      mathOp = '*';
    } else {
      currentResult /= enteredNumber;
      mathOp = '/';
    }

    logIt(initialResult, mathOp, enteredNumber);
    writeLog(calculationType, initialResult, enteredNumber, currentResult);
  }
// }

function add() {
  calculateResult('add');
}

function substract() {
  calculateResult('substract');
}

function multiply() {
  calculateResult('multiply');
}

function divide() {
  calculateResult('divide');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
