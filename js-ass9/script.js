var display = document.getElementById('display');

function showDisplay(value) {
    display.value += value;
}

function removeDisplay() {
    display.value = '';
}

function calculate() {
    var updation = display.value;
    var result = upgrade(updation);
    display.value = result;
}

function upgrade(updation) {
    var currentNumber = '';
    var numbers = [];
    var operators = [];
    
    for (var i = 0; i < updation.length; i++) {
        var num = updation[i];
        if (isNumericOrDecimal(num) || num === '.') {
            currentNumber += num;
        } else {
            if (currentNumber !== '') {
                numbers.push(parseFloat(currentNumber));
                currentNumber = '';
            }
            if (num !== ' ') {
                operators.push(num);
            }
        }
    }
    if (currentNumber !== '') {
        numbers.push(parseFloat(currentNumber));
    }

    var result = numbers[0];
    for (var i = 0; i < operators.length; i++) {
        var operator = operators[i];
        var nextNumber = numbers[i + 1];
        switch (operator) {
            case '+':
                result += nextNumber;
                break;
            case '-':
                result -= nextNumber;
                break;
            case '*':
                result *= nextNumber;
                break;
            case '/':
                if (nextNumber !== 0) {
                    result /= nextNumber;
                } else {
                    result = 'Error';
                }
                break;
        }
    }

    return result;
}

function isNumericOrDecimal(num) {
    return num >= '0' && num <= '9';
}
