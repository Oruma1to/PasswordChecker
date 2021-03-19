/*
For the final iteration all i really had to do was change the required minimum within the regular expression check i put in place. Since i planned this out ahead i set the branches up to be easy to change.

Also i changed the argument name from admin to user , in order to be more in line with what the document asked for. So now in order to require admin credentials the second argument must be passed as admin.
*/

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
  iteration4
}