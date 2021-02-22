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

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
