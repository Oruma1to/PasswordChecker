/*
The BELOW returns whether or not a string meets the requirements using simple Regular expression. 
  -[A-Z]{1} will require at least 1 character to be a letter 
  -\d{1} will require at least 1 digit, 
  -/i ignores all casing for the letters.
*/

const iteration2 = (password) => {
  if (!password.match(/[A-Z]{1}/i)) {
    return 'Password must contain at least 1 Letter'
  } else if (!password.match(/\d{1}/)) {
    return 'Password must contain at least 1 Number'
  } else if (password.length < 8) {
    return 'Password must be at least 8 characters long'
  }
  return 'Password Accepted!'
}

console.log(iteration2('hello123')) // Password Accepted!
console.log(iteration2('12345')) //Password must contain at least 1 Letter
console.log(iteration2('hello')) //Password must contain at least 1 Number
console.log(iteration2('hello13')) //Password must be at least 8 characters long
console.log(iteration2('goodbye123')) //Password Accepted!
