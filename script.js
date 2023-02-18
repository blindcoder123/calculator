function addition(a, b) {
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
    display.removeChild(display.firstChild);
})

const one = document.querySelector('#One');

one.addEventListener('click', () => {     
    if(opCode == '') {
        leftVal = Number("" + leftVal + 1);
    } else {
        rightVal = Number("" + rightVal + 1);
    }
    display.append('1');
});

const two = document.querySelector('#Two');
two.addEventListener('click', () => {  
    if(opCode == '') {
        leftVal = Number("" + leftVal + 2);
    } else {
        rightVal = Number("" + rightVal + 2);
    }
    display.append('2');
});

const three = document.querySelector('#Three');
three.addEventListener('click', () => { 
    if(opCode == '') {
        leftVal = Number("" + leftVal + 3);
    } else {
        rightVal = Number("" + rightVal + 3);
    }
    display.append('3');
});

const four = document.querySelector('#Four');
four.addEventListener('click', () => { 
    if(opCode == '') {
        leftVal = Number("" + leftVal + 4);
    } else {
        rightVal = Number("" + rightVal + 4);
    }
    display.append('4');
});

const five = document.querySelector('#Five');
five.addEventListener('click', () => {
    if(opCode == '') {
        leftVal = Number("" + leftVal + 5);
    } else {
        rightVal = Number("" + rightVal + 5);
    }
    display.append('5');
});

const six = document.querySelector('#Six');
six.addEventListener('click', () => {
    if(opCode == '') {
        leftVal = Number("" + leftVal + 6);
    } else {
        rightVal = Number("" + rightVal + 6);
    }
    display.append('6');
});

const seven = document.querySelector('#Seven');
seven.addEventListener('click', () => { 
    if(opCode == '') {
        leftVal = Number("" + leftVal + 7);
    } else {
        rightVal = Number("" + rightVal + 7);
    }
    display.append('7');
});

const eight = document.querySelector('#Eight');
eight.addEventListener('click', () => {
    if(opCode == '') {
        leftVal = Number("" + leftVal + 8);
    } else {
        rightVal = Number("" + rightVal + 8);
    }
    display.append('8');
});

const nine = document.querySelector('#Nine');
nine.addEventListener('click', () => {
    if(opCode == '') {
        leftVal = Number("" + leftVal + 9);
    } else {
        rightVal = Number("" + rightVal + 9);
    }
    display.append('9');
});

const zero = document.querySelector('#Zero');
zero.addEventListener('click', () => {  
    if(opCode = '') {
        leftVal = Number("" + leftVal + 0);
    } else {
        rightVal = Number("" + rightVal + 0);
    }
    display.append('0');
});

const add = document.querySelector('#Add');
add.addEventListener('click', () => {
    if(opCode !== '') {
        content.textContent = operate(opCode, leftVal, rightVal);
        display.append(content);
        leftVal = operate(opCode, leftVal, rightVal);
        rightVal = 0;
    }
    else {
        opCode = '+';
        display.append('+');
    }
});

const subtract = document.querySelector('#Subtract');
subtract.addEventListener('click', () => {
    if(opCode !== '') {
        content.textContent = operate(opCode, leftVal, rightVal);
        display.append(content);
        leftVal = operate(opCode, leftVal, rightVal);
        rightVal = 0;
    }
    else {
        opCode = '-';
        display.append('-');
    }
});

const multiply = document.querySelector('#Multiply');
multiply.addEventListener('click', () => {
    if(opCode !== '') {
        content.textContent = operate(opCode, leftVal, rightVal);
        display.append(content);
        leftVal = operate(opCode, leftVal, rightVal);
        rightVal = 0;
    }
    else {
        opCode = '*';
        display.append('*');
    }
});

const divide = document.querySelector('#Divide');
divide.addEventListener('click', () => {
    if(opCode !== '') {
        content.textContent = operate(opCode, leftVal, rightVal);
        display.append(content);
        leftVal = operate(opCode, leftVal, rightVal);
        rightVal = 0;
    }
    else {
        opCode = '/';
        display.append('/');
    }
});

const equals = document.querySelector('#Equals');
equals.addEventListener('click', () => {
    while(display.firstChild) {
        display.removeChild(display.firstChild)
    }   
    content.textContent = operate(opCode, leftVal, rightVal);
    display.append(content);
})

const content = document.createElement('div');
