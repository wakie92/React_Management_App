import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../components/Home';
import { isLoggedIn, logOut, LoginState } from '../store/modules/Login';

const HomeContainer = () => {
  const login = useSelector((state: LoginState) => state.isLoggedIn);
  const logout = useSelector((state: LoginState) => state.loginUser);

  console.log(login);
  console.log(logout);

  const dispatch = useDispatch();

  const LogIn = useCallback(() => dispatch({ type: isLoggedIn }), [dispatch]);

  const LogOut = useCallback(() => dispatch({ type: logOut }), [dispatch]);

  return <Home logIn={LogIn} logOut={LogOut} />;
};

export default HomeContainer;
