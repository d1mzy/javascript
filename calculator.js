let firstValue= Number(prompt('Please enter your first number'));
let operation = (prompt ('Please enter an operation'));
let secondValue = Number(prompt('Please enter your second number'));


function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
function subtract(firstValue, secondValue) {
    return firstValue - secondValue;
}
function multiply(firstValue, secondValue) {
    return firstValue * secondValue;
}
function divide(firstValue, secondValue) {
    return firstValue / secondValue;
}
function power(firstValue, secondValue) {
    return firstValue ^ secondValue;
};

switch (operation) {
    case '+':
        finalValue= add(firstValue, secondValue);
        break;
    case '-':
            finalValue= subtract(firstValue, secondValue);
            break;
    case '*':
        finalValue= multiply(firstValue, secondValue);
        break;
    case '/':
        finalValue= divide(firstValue, secondValue);
        break;
    case '^':
            finalValue= power(firstValue, secondValue);
            break;
    default: console.log(`Please enter a valid operation (+,-,*,/,^)`);
            break;
};

console.log (`${firstValue} ${operation} ${secondValue} = ${finalValue}`);

