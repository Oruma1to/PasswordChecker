// iteration 1 Only checks for valid or invalid passwords that must include at least 1 letter, 1 number, and be minimum 8 characters long.
const iteration1 = (password) => {
  return (password.match(/[A-Z]{1}\d{1}/i) && password.length >= 8) ? 'The password is accepted' : 'The password is not accepted'
}


//Iteration 2 now adds error messages if invalid.
const iteration2 = password => {
  // Error messages added for all combination of errors.
  let pwError = 'Password must contain at least 1';
  let lengthError = 'and must be at least 8 characters long';

  if (password.length < 8) {
    if (!password.match(/[A-Z]{1}/i) && password.match(/\d{1}/)) return `${pwError} letter ${lengthError}`;
    if (!password.match(/\d{1}/) && password.match(/[A-Z]{1}/i)) return `${pwError} number ${lengthError}`;
  };

  if (!password.match(/[A-Z]{1}/i)) {
    return `${pwError} letter`;
  } else if (!password.match(/\d{1}/)) {
    return `${pwError} number`;
  } else if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  };
  return 'Password Accepted!';
};

console.log(iteration2('12321'))

// Iteration 3 now includes an admin branch in order to add more strict requirements if entering an admin password.
const iteration3 = (password, user = 'normal') => {
  let pwError = 'Password must contain at least 1';

  if (user === 'normal') {
    if (!password.match(/[A-Z]{1}/i)) {
      return `${pwError} letter`;
    } else if (!password.match(/\d{1}/)) {
      return `${pwError} number`;
    } else if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
  } else if (user === 'admin') {
    if (!password.match(/[A-Z]{1}/i)) {
      return `${pwError} letter`;
    } else if (!password.match(/\d{1}/)) {
      return `${pwError} number`;
    } else if (!password.match(/[!@#$%^&*]{1}/)) {
      return `${pwError} of the following special characters ! @ # $ % ^ & *`;
    } else if (password.length < 13) {
      return 'Password must be at least 13 characters long';
    }
  }
  return 'Password Accepted!';
}


// Iteration 4 has increased strength requirements from iteration 3 for both normal user and admin, and all of the code has been refactored and shortened for readability by cutting some branches and applying universal checks at the beginning of our function call regardless of user type.
const iteration4 = (password, user = 'normal') => {
  let pwError = 'Password must contain at least';

  // universal regex check for both type of users having atleast 1 letter and 1 number in pw.
  if (!password.match(/[A-Z]{1}/i)) {
    return `${pwError} 1 letter`;
  } else if (!password.match(/\d{1}/)) {
    return `${pwError} 1 number`;
  }


  if (user === 'normal') {
    if (password.length < 10) return 'Password must be at least 10 characters long';
  } else if (user === 'admin') {
    if (!password.match(/[!@#$%^&*]{3}/)) {
      return `${pwError} 3 of the following special characters ! @ # $ % ^ & *`;
    } else if (password.length < 13) {
      return 'Password must be at least 13 characters long';
    };
  };
  return 'Password Accepted!'; // pw is accepted if nothing else is return.
};


module.exports = {
  iteration1,
  iteration2,
  iteration3
}