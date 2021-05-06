import React from 'react';

import { logInWithCreds } from 'apis/auth';
import { setAccessToken } from 'utils/tokenManager';
const Login = () => {
  const handleLoginClick = () => {
    try {
      const result = logInWithCreds('soohan', '123123');
      setAccessToken(result);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button onClick={handleLoginClick}>로그인</button>
    </div>
  );
};

export default Login;
