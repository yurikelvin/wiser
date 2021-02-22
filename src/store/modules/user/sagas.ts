import { all, takeLatest, call, put } from 'redux-saga/effects'
import { setLoggedUserFailure, setLoggedUserRequest, setLoggedUserSuccess } from './actions';
import AuthService from '../../../services/auth';
import { AxiosResponse } from 'axios';

type CheckUserLoginRequest = ReturnType<typeof setLoggedUserRequest>

interface IUserLoginResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const authService = new AuthService();

function* checkUserLogin({ payload }: CheckUserLoginRequest) {
  const { user: { email, password } } = payload;
  try {

    const userLoginResponse: AxiosResponse<IUserLoginResponse[]> = yield call(authService.login, email, password);
  
    // Remove user password from login call
    delete userLoginResponse.data[0]['password'];
    yield put(setLoggedUserSuccess(userLoginResponse.data[0]))
  } catch(e) {
    yield put(setLoggedUserFailure(e.message));
  }

}

export default all([
  takeLatest('SET_LOGGED_USER_REQUEST', checkUserLogin)
]);