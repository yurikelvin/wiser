import { Reducer } from 'redux';
import { ILoggedUserState, IUserState } from './types';

const INITIAL_STATE: ILoggedUserState = { loggedUser: null, loggedUserErrorMessage: ''};

const user: Reducer<ILoggedUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LOGGED_USER_SUCCESS': {
      const { user } = action.payload;
      return {
        ...state,
        loggedUser: user
      };
    }
    case 'SET_LOGGED_USER_FAILURE': {
      return {
        ...state,
        loggedUserErrorMessage: action.payload.message
      };
    }
    default: {
      return state;
    }
  }
}

export default user;