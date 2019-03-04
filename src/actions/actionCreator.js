import {
    Login,
    Logout
  } from './actionsTypes';

  const login = () => ({
    type: Login
  });
  
  const logout = () => ({
    type: Logout
  });
  
  export { login, logout };
