let currentInput = '';
let operator = '';
let result = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    operator = op;
    if (currentInput !== '') {
        result = currentInput;
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    result = '';
    operator = '';
    updateDisplay(currentInput);
}

function calculate() {
    switch (operator) {
        case '+':
            result = parseFloat(result) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(result) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(result) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(result) / parseFloat(currentInput);
            break;
    }
    updateDisplay(result);
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
