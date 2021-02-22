import Axios, { AxiosInstance } from 'axios';

import NetworkException from '../exceptions/NetworkException';

const API_URL = 'https://6032b8fba223790017acf66a.mockapi.io/';

interface UserLoggedData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

class CoreService {
  protected api: AxiosInstance;

  protected USER_KEY: string;

  constructor() {
    this.USER_KEY = 'WISER_USER';

    this.api = Axios.create({
      baseURL: API_URL,
      timeout: 1000 * 60,
    });

    this.api.interceptors.response.use(
      response => response,
      error => NetworkException(error)
    );
  }

  getApi = () => this.api;

  isUserAuthenticated = () => localStorage.getItem(this.USER_KEY) !== null;

  setLoggedUser(userData: UserLoggedData) {
    localStorage.setItem(this.USER_KEY, btoa(JSON.stringify(userData)));
  }

  getLoggedUser() {
    const userLocal = localStorage.getItem(this.USER_KEY);
    if (userLocal === null) {
      return null;
    }
    return JSON.parse(atob(userLocal));
  }

  logout = () => {
    localStorage.removeItem(this.USER_KEY);
  };

}

export default CoreService;
