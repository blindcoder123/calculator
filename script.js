function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(s, a, b) {
    error = "Error"
    switch (s) {
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case '*':
            return multiply(a, b);
        case '/': 
            return divide(a, b);
        default:
            return error;
    }
}