import React from 'react';

export const LOGGING_IN = 'loggingIn';
export const LOGGED_IN = 'loggedIn';
export const NOT_LOGGED_IN = 'notLoggedIn';

const initUserState = NOT_LOGGED_IN;

const changeUserState = (data = LOGGING_IN | LOGGED_IN | NOT_LOGGED_IN) => {
  userState.loginState = data;
};

export let userState = {
  loginState: initUserState,
  changeUserState: changeUserState,
};

export const UserContext = React.createContext({
  loginState: userState.loginState,
  changeUserState: userState.changeUserState,
});
