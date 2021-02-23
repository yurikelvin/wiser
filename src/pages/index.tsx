import { useEffect } from "react";
import { useSelector } from "react-redux";
import Router from 'next/router';
import { IState } from "../store";
import { IUserState } from "../store/modules/user/types";

export default function Home() {
  const loggedUser = useSelector<IState, IUserState>(state => state.user.loggedUser);

  function redirectTo(page) {
    Router.push(page);
  }

  if (process.browser && !loggedUser) {
    redirectTo('/login');
    return <div />
  }

  if (!process.browser) {
    return <div />;
  }

  const {
    id,
    firstName,
    lastName,
    email
  } = loggedUser;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', margin: '2rem' }}>
      <span>Olá, {firstName} {lastName}</span>
      <span>Seu email é: {email}</span>
      <span>Você é o usuário de ID: {id}</span>
    </div>
  )
}
