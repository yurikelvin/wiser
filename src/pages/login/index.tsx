import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import { Title } from '../../styles/pages/Login';
import { setLoggedUserRequest } from '../../store/modules/user/actions';
import { IUserStateRequest } from '../../store/modules/user/types';
import { IState } from '../../store';

export default function Login() {
  const dispatch = useDispatch();

  const loginErrorMessage = useSelector<IState, string>(state => state.user.loggedUserErrorMessage)

  const hasLoginErrorMessage = loginErrorMessage.trim() !== '';

  function redirectToHome() {
    Router.push('/');
  }

  const handleSubmitLogin = useCallback((userData: IUserStateRequest ) => {
    dispatch(setLoggedUserRequest(userData))
  }, [dispatch]);

  useEffect(() => {
    const user = {
      email: 'test@gmail.com',
      password: 'test',
    }
    handleSubmitLogin(user);

  }, []);
  return (
    <div>
      <Title>Login</Title>
      { hasLoginErrorMessage && <span>{loginErrorMessage}</span> }
    </div>
  )
}