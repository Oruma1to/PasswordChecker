const { expect } = require('@jest/globals')
let pwChecker = require('./passwordChecker.js')
let allIterations = require('./allIterations.js')


// Iteration 1 tests
test('Expect all cases for iteration 1 to include at least 1 number and 1 letter, minimum 8 characters long.', () => {
  expect(allIterations.iteration1('hello123')).toMatch('Valid');
  expect(allIterations.iteration1('hello12')).toMatch('Invalid');
  expect(allIterations.iteration1('helloafdads')).toMatch('Invalid');
  expect(allIterations.iteration1('123123123')).toMatch('Invalid');
})



// All Iteration 4 tests
test("Expect all cases for Normal user to Have at least 1 letter, 1 number, 10 characters minimum, Otherwise it will state what is missing", () => {
  expect(pwChecker.iteration4('hello12345')).toMatch('Password Accepted');
  expect(pwChecker.iteration4('12345')).toMatch('Password must contain at least 1 Letter');
  expect(pwChecker.iteration4('hellosdhfakj')).toMatch('Password must contain at least 1 Number');
  expect(pwChecker.iteration4('hello145')).toMatch('Password must be at least 10 characters long');
})

test("Expect all cases for Admin user to Have at least 1 letter, 1 number, 13 characters minimum, and minimum 3 special characters, Otherwise it will state what is missing", () => {
  expect(pwChecker.iteration4('hello12345','admin')).toMatch('Password must contain at least 3 of the following special characters ! @ # $ % ^ & *');
  expect(pwChecker.iteration4('12345','admin')).toMatch('Password must contain at least 1 Letter');
  expect(pwChecker.iteration4('hellosdhfakj','admin')).toMatch('Password must contain at least 1 Number');
  expect(pwChecker.iteration4('hello145!@#','admin')).toMatch('Password must be at least 13 characters long');
})

test("Expect all passwords to be accepted for both normal users and admin with all iteration 4 requirements", () => {
  expect(pwChecker.iteration4('hello123!@#22', 'admin')).toMatch('Password Accepted');
  expect(pwChecker.iteration4('Daniel4255&*@', 'admin')).toMatch('Password Accepted');
  expect(pwChecker.iteration4('jenny12345')).toMatch('Password Accepted');
  expect(pwChecker.iteration4('99999999999999a')).toMatch('Password Accepted');
})