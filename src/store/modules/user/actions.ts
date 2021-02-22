import { IUserState, IUserStateRequest } from './types';

export function setLoggedUserRequest(user: IUserStateRequest) {
  return {
    type: 'SET_LOGGED_USER_REQUEST',
    payload: {
      user,
    }
  }
}

export function setLoggedUserSuccess(user: IUserState) {
  return {
    type: 'SET_LOGGED_USER_SUCCESS',
    payload: {
      user,
    }
  }
}

export function setLoggedUserFailure(message: string) {
  return {
    type: 'SET_LOGGED_USER_FAILURE',
    payload: {
      message,
    }
  }
}