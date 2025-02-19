function calculate(num1, num2, operation) {
    switch (operation) {
        case '+':
            return `${num1} + ${num2} = ${num1 + num2}`;
        case '-':
            return `${num1} - ${num2} = ${num1 - num2}`;
        case '*':
            return `${num1} * ${num2} = ${num1 * num2}`;
        case '/':
            return `${num1} / ${num2} = ${num1 / num2}`;
        default:
            return "Invalid operation";
    }
}

const input = prompt("Enter two numbers and an operation:").split(",");
console.log(calculate(Number(input[0]), Number(input[1]), input[2]));
