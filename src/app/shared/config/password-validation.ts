export const PASSWORD_RULES = [
  {
    status: false,
    message: 'The number of letters consists of 8 to 30 characters',
  },
  {
    status: false,
    message: 'Contain at least 1 number (0-9)',
  },
  {
    status: false,
    message: 'Contain at least 1 lower case letter (a-z)',
  },
  {
    status: false,
    message: 'Contain at least 1 upper case letter (A-Z)',
  },
  {
    status: false,
    message: 'Contain at least 1 #, -, !, @, %, &, /, (, ), ?, +, *',
  },
  {
    status: false,
    message: 'Not contain more than 3 consecutive identical characters',
  },
  {
    status: false,
    message: 'Not contain more than 3 consecutive lower case characters',
  },
];

export const PASSWORD_VALIDATION = (currentValue: string, compareValue: string): any => {
  if (currentValue !== compareValue) {
    return {
      kind: 'passwordMismatch',
      message: 'Password do not match',
    };
  } else if (!/^[\s\S]{8,30}$/.test(currentValue)) {
    return {
      kind: 'passwordLength',
      message: 'The number of letters consists of 8 to 30 characters',
    };
  } else if (!/[0-9]/.test(currentValue)) {
    return {
      kind: 'passwordNumber',
      message: 'Contain at least 1 number (0-9)',
    };
  } else if (!/[a-z]/.test(currentValue)) {
    return {
      kind: 'passwordLowercase',
      message: 'Contain at least 1 lower case letter (a-z)',
    };
  } else if (!/[A-Z]/.test(currentValue)) {
    return {
      kind: 'passwordUppercase',
      message: 'Contain at least 1 upper case letter (A-Z)',
    };
  } else if (!/[-!%^&*@#?()+|\/]/.test(currentValue)) {
    return {
      kind: 'passwordSpecial',
      message: 'Contain at least 1 special character letter (#, @, &, etc)',
    };
  } else if (!/^(?:(.)(?!\1\1))*$/.test(currentValue)) {
    return {
      kind: 'passwordNoTripleIdentical',
      message: 'Not contain more than 3 consecutive identical characters',
    };
  } else if (!/^(?!.*(.)\1\1)/.test(currentValue)) {
    return {
      kind: 'passwordNoTripleLowercase',
      message: 'Not contain more than 3 consecutive lower case characters',
    };
  }

  return null;
};

export const PASSWORD_RULES_CHECK = (passwordValue: string): any => {
  const passwordRules = [...PASSWORD_RULES];

  passwordRules.at(0)!.status = /^[\s\S]{8,30}$/.test(passwordValue);
  passwordRules.at(1)!.status = /[0-9]/.test(passwordValue);
  passwordRules.at(2)!.status = /[a-z]/.test(passwordValue);
  passwordRules.at(3)!.status = /[A-Z]/.test(passwordValue);
  passwordRules.at(4)!.status = /[-!%^&*@#?()+|\/]/.test(passwordValue);
  passwordRules.at(5)!.status = /^(?!.*(.)\1\1)/.test(passwordValue);
  passwordRules.at(6)!.status = /^(?:(.)(?!\1\1))*$/.test(passwordValue);

  return passwordRules;
};
