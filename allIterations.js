// iteration 1 Only checks for valid or invalid passwords that must include at least 1 letter, 1 number, and be minimum 8 characters long.
const iteration1 = (password) => {
  return (password.match(/[A-Z]{1}\d{1}/i) && password.length >= 8) ? 'Valid' : 'Invalid'
}

//Iteration 2 now adds error messages if invalid.
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


// Iteration 3 now includes an admin branch in order to add more strict requirements if entering an admin password.
const iteration3 = (password, user = 'normal') => {
  if (user === 'normal') {
    if (!password.match(/[A-Z]{1}/i)) {
      return 'Password must contain at least 1 Letter'
    } else if (!password.match(/\d{1}/)) {
      return 'Password must contain at least 1 Number'
    } else if (password.length < 8) {
      return 'Password must be at least 8 characters long'
    }
  } else if (user === 'admin') {
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


// Iteration 4 has increased strength requirements from iteration 3 for both normal user and admin.
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
      return 'Password must contain at least one of the following special characters ! @ # $ % ^ & *'
    } else if (password.length < 13) {
      return 'Password must be at least 13 characters long'
    }
  }
  return 'Password Accepted!'
}

module.exports = {
  iteration1,
  iteration2,
  iteration3,
  iteration4
}