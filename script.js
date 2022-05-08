function addition(a, b) {
    console.log(a+b);
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
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
            return multiplication(a, b);
        case '/': 
            return division(a, b);
        default:
            return error;
    }
}

let leftVal = 0;
let rightVal = 0;
let opCode = '';

const clear = document.querySelector('#Clear');
clear.addEventListener('click', () => {
    leftVal = 0;
    rightVal = 0;
    opCode = '';
})

const one = document.querySelector('#One');
one.addEventListener('click', () => {
    if(opCode == '') {
        leftVal = 1;
    } else {
        rightVal = 1;
    }
});

const two = document.querySelector('#Two');
two.addEventListener('click', () => {
    if(opCode == '') {
        leftVal = 2;
    } else {
        rightVal = 2;
    }
});

const three = document.querySelector('#Three');
three.addEventListener('click', () => {
    if(opCode = '') {
        leftVal = 3;
    } else {
        rightVal = 3;
    }
});

const four = document.querySelector('#Four');
four.addEventListener('click', () => {
    if(opCode = '') {
        leftVal = 4;
    } else {
        rightVal = 4;
    }
});

const five = document.querySelector('#Five');
five.addEventListener('click', () => {
    if(opCode = '') {
        leftVal = 5;
    } else {
        rightVal = 5;
    }
});

const six = document.querySelector('#Six');
six.addEventListener('click', () => {
    if(opCode = '') {
        leftVal = 6;
    } else {
        rightVal = 6;
    }
});

const seven = document.querySelector('#Seven');
seven.addEventListener('click', () => {
    if(opCode = '') {
        leftVal = 7;
    } else {
        rightVal = 7;
    }
});

const eight = document.querySelector('#Eight');
eight.addEventListener('click', () => {
    if(opCode = '') {
        leftVal = 8;
    } else {
        rightVal = 8;
    }
});

const nine = document.querySelector('#Nine');
nine.addEventListener('click', () => {
    if(opCode = '') {
        leftVal = 9;
    } else {
        rightVal = 9;
    }
});

const zero = document.querySelector('#Zero');
zero.addEventListener('click', () => {
    if(opCode = '') {
        leftVal = 0;
    } else {
        rightVal = 0;
    }
});

const add = document.querySelector('#Add');
add.addEventListener('click', () => {
    opCode = '+';
});

const subtract = document.querySelector('#Subtract');
subtract.addEventListener('click', () => {
    opCode = '-';
});

const multiply = document.querySelector('#Multiply');
multiply.addEventListener('click', () => {
    opCode = '*';
});

const divide = document.querySelector('#Divide');
divide.addEventListener('click', () => {
    opCode = '/';
});

const equals = document.querySelector('#Equals');
equals.addEventListener('click', () => {
    operate(opCode, leftVal, rightVal);
})