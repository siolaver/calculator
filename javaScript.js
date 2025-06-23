const text = document.querySelector('.input');
const container = document.querySelector('.container');
for (i = 0; i <= 9; i++) {
    const numbers = document.createElement('button');
    numbers.textContent = i;
    container.appendChild(numbers);

    numbers.addEventListener('click', function(e) {
        if (firstNumber == "" && secondNumber == "" || firstNumber != "" && operator == "") {
        currentNum = e.target.textContent;
        firstNumber += currentNum;
        console.log(firstNumber);
        text.append(currentNum);
        } else if (operator != "" && firstNumber != "") {
        currentNum = e.target.textContent;
        secondNumber += currentNum;
        console.log(secondNumber);
        text.append(currentNum);
        } else {
        currentNum = e.target.textContent;
        secondNumber += currentNum;
        console.log(secondNumber);
        text.append(currentNum);
        }
    });
}

const add = document.createElement('button');
add.textContent = "+";
add.classList.add('operator');
container.appendChild(add);

const subtract = document.createElement('button');
subtract.textContent = "-";
subtract.classList.add('operator');
container.appendChild(subtract);

const multiply = document.createElement('button');
multiply.textContent = "*";
multiply.classList.add('operator');
container.appendChild(multiply);

const divide = document.createElement('button');
divide.textContent = "/";
divide.classList.add('operator');
container.appendChild(divide);

const equal = document.createElement('button');
equal.textContent = "="
equal.classList.add('equal');
container.appendChild(equal)

const allClear = document.createElement('button');
allClear.textContent = "AC";
allClear.classList.add('other');
container.appendChild(allClear);

const del = document.createElement('button');
del.textContent = "DEL";
del.classList.add('other');
container.appendChild(del);

const array = [add, subtract, multiply, divide];

let firstNumber = "";
let secondNumber = "";
let operator = "";

array.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        operator = e.target.textContent;
        text.textContent = "";
    })
})

equal.addEventListener('click', function(e) {
    text.textContent = "";
    if (operator === "/" && secondNumber === "0") {
        result = "ERROR"
    } else if (operator === "+") {
        result = parseInt(firstNumber) + parseInt(secondNumber);
    } else if (operator === "-") {
        result = parseInt(firstNumber) - parseInt(secondNumber);
    } else if (operator === "*") {
        result = parseInt(firstNumber) * parseInt(secondNumber);
    } else if (operator === "/") {
        result = parseInt(firstNumber) / parseInt(secondNumber);
    }

    function isInt(n) {
        if (n % 1 !== 0) {
            result = parseFloat(result.toString().slice(0, 5));
            console.log(result);
        }
    }
    if (typeof(result) === "number") { 
        isInt(result);
    };
    text.append(result);
    console.log(firstNumber, secondNumber, operator)
    console.log(result)
    firstNumber = `${result}`;
    secondNumber = "";
})

allClear.addEventListener('click', function() {
    firstNumber = "";
    secondNumber = "";
    text.textContent = "";
})

del.addEventListener('click', function(e) {
    if (text.textContent === firstNumber) {
        text.textContent = text.textContent.slice(0, -1);
        firstNumber = firstNumber.slice(0, -1);
    } else {
        text.textContent = text.textContent.slice(0, -1);
        secondNumber = secondNumber.slice(0, -1);
    }
})