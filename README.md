# PasswordChecker

### Language Used: Javascript

### Test Frame Work used: JEST (https://jestjs.io/)
What is jest?
Jest is a JavaScript testing framework built by Facebook and primarily designed for React-based applications, but is also used with Babel, JavaScript, Node, Angular, and Vue.

### How to run
Clone this repository and pull it to your local machine. Using node.js execute "npm install" in order to install the jest testing framework.

#### The Tool: algorithm that takes in a string and determines whether or not it meats the minimum requirements.

### Requirements
The final source code checks for the following conditions to be met when a password is entered.

#### Both normal user and admin
  - There is at least 1 number
  - There is at least 1 letter
  
#### User
  - Minimum character length of 10
  
#### Admin
  - Minimum character length of 13
  - There are at least 3 of the following special characters (! @ # $ % ^ & *)
  
### How to test with jest
Within the PasswordChecker folder execute "npm test". This will load the jest script and run tests. 
Currently there are some test cases i set up using the final iteration of the password checker. If you would like to create some test cases of your own here is the syntax.

**test**('Here goes the message describing what the test should look for', () => {
  **expect**(pwChecker.iteration4('test password goes here').**toMatch**('Error message or approval message goes here');
});

Simply put **expect** takes the function call with the argument passed in, and **toMatch** checks to make sure that the result deeply equals the expected result.
