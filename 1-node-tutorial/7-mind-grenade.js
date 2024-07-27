const number1 = 5;
const number2 = 10;

//normal function
function addValues() {
  console.log(`the sum is: ${number1 + number2}`);
}

//arrow function
const sum = () => {
  console.log(`the sum is: ${number1 + number2}`);
};

sum();
addValues();
