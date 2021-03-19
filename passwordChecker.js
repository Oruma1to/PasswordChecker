/*
Here i extended the branch style solution by nesting seperate branches for admin and standard user. This way only one of the two branches of code will run depending on whether or not someone is admin. 

Admin is set to 'no' (as a string) by default, if 'yes' is added as a second argument it will run the password strength check for an admin level user. 

The reason i didn't use the boolean value of true or false in this case is so that truthy or falsey values can't be passed in as an argument to get around the restrictions for an admin.
*/

const iteration3 = (password, admin = 'no') => {
  if (admin === 'no') {
    if (!password.match(/[A-Z]{1}/i)) {
      return 'Password must contain at least 1 Letter'
    } else if (!password.match(/\d{1}/)) {
      return 'Password must contain at least 1 Number'
    } else if (password.length < 8) {
      return 'Password must be at least 8 characters long'
    }
  } else if (admin === 'yes') {
    if (!password.match(/[A-Z]{1}/i)) {
      return 'Password must contain at least 1 Letter'
    } else if (!password.match(/\d{1}/)) {
      return 'Password must contain at least 1 Number'
    } else if (!password.match(/[!@#$%^&*]{1}/)) {
      return 'Password must contain at least one of the following special characters ! @ # $ % ^ & *'
    } else if (password.length < 13) {
      return 'Password must be at least 13 characters long'
    }
  }
  return 'Password Accepted!'
}

console.log(iteration3('hello!#$!@$@!', 'yes')) // Password must contain at least 1 Number
console.log(iteration3('a12345!', 'yes')) //Password must be at least 13 characters long
console.log(iteration3('141415!#@!#!@#132')) //Password must contain at least 1 Letter
console.log(iteration3('hello133123124', 'yes')) //Password must contain at least one of the following special characters ! @ # $ % ^ & *
console.log(iteration3('goodbye123')) //Password Accepted!
