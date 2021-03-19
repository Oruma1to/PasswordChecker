/*
The BELOW returns whether or not a string meets the requirements using simple Regular expression. 
  -[A-Z]{1} will require at least 1 character to be a letter 
  -\d{1} will require at least 1 digit, 
  -/i ignores all casing for the letters.
*/

const iteration1 = (password) => {
  return (password.match(/[A-Z]{1}\d{1}/i) && password.length >= 8) ? 'Valid' : 'Invalid'
}

console.log(iteration1('hello123')) // Pass
console.log(iteration1('12345')) //Fail
console.log(iteration1('hello')) //Fail
console.log(iteration1('hello13')) //Fail
console.log(iteration1('goodbye123')) //Pass
