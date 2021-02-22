export interface IUserState {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface ILoggedUserState {
  loggedUser: IUserState;
  loggedUserErrorMessage: string;
}

export interface IUserStateRequest {
  email: string;
  password: string;
}