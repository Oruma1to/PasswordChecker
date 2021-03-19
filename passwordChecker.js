/*
For the final iteration all i really had to do was change the required minimum within the regular expression check i put in place. Since i planned this out ahead i set the branches up to be easy to change.

Also i changed the argument name from admin to user , in order to be more in line with what the document asked for. So now in order to require admin credentials the second argument must be passed as admin.
*/

const iteration4 = (password, user = 'normal') => {
  if (user === 'normal') {
    if (!password.match(/[A-Z]{1}/i)) {
      return 'Password must contain at least 1 Letter'
    } else if (!password.match(/\d{1}/)) {
      return 'Password must contain at least 1 Number'
    } else if (password.length < 10) {
      return 'Password must be at least 10 characters long'
    }
  } else if (user === 'admin') {
    if (!password.match(/[A-Z]{1}/i)) {
      return 'Password must contain at least 1 Letter'
    } else if (!password.match(/\d{1}/)) {
      return 'Password must contain at least 1 Number'
    } else if (!password.match(/[!@#$%^&*]{3}/)) {
      return 'Password must contain at least 3 of the following special characters ! @ # $ % ^ & *'
    } else if (password.length < 13) {
      return 'Password must be at least 13 characters long'
    }
  }
  return 'Password Accepted!'
}

console.log(iteration4('hello1!#$!@$@!', 'admin')) // Password Accepted!
console.log(iteration4('a!@#12345!', 'admin')) //Password must be at least 13 characters long
console.log(iteration4('141415!#@!#!@#132')) //Password must contain at least 1 Letter
console.log(iteration4('hello!!3124', 'admin')) //Password must contain at least 3 of the following special characters ! @ # $ % ^ & *
console.log(iteration4('goodbye123')) //Password Accepted!
