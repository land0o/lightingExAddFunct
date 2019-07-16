// 1. Create a function that logs the result of adding two numbers (edited)
const addFunction = (num1, num2) => console.log(num1 + num2);
addFunction(30, 4)

const multFunction = (num1, num2) =>
    console.log(num1 * num2);
multFunction(45, 45)

const calaculate = (num1, num2, funky) => {
    funky(num1, num2)
}
calaculate(17, 17, addFunction)