let firstNum = '';
let secondNum = '';
let operator = '';

function appendToDisplay(num) {
    document.getElementById('display').value += num;
    if (operator === '') {
        firstNum += num;
    } else {
        secondNum += num;
    }
}

function setOperator(op) {
    if (firstNum === '') return; 
    if (operator !== '') return; 
    operator = op;
    document.getElementById('display').value += ' ' + op + ' ';
}

function calculateResult() {
    if (firstNum === '' || secondNum === '' || operator === '') return;
    document.getElementById('display').value = '';
    let result;
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);
    switch (operator) {
        case '+':   
            result = num1 + num2; 
            break;   
         case '-':   
            result = num1 - num2; 
            break; 
         case '*':   
            result = num1 * num2; 
            break; 
         case '/':   
            result = num1 / num2; 
            break;
        default:
            result = 'Error';
    }
    document.getElementById('display').value += result;
}

function clearDisplay(){
    document.getElementById('display').value = '';
    operator = '';
    firstNum = '';
    secondNum = '';
}