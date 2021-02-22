import CoreService from './core';

class AuthService extends CoreService {
  login = async (email: string, password: string) => {
    try {
      const response = await this.getApi().get('/users', { params: {
        email,
      } });
      if (response.data && response.data.length > 0) {
        // With the mock API we do a request with get verb, so we suppose that the first user is the desired user
        const {
          id,
          firstName,
          lastName,
          email: userEmail,
          password: userPassword
        } = response.data[0];

        // The mock API have a little bugs related to query params
        // This will be handled by the backend
        // This error message avoid the user know the real error (wrong password)
        if (password !== userPassword) {
          return Promise.reject(new Error('E-mail ou senha inválidos.'));
        }

        this.setLoggedUser(
          {
            id,
            firstName,
            lastName,
            email: userEmail
          }
        );

      } else if (response.data && response.data.length === 0) {
        return Promise.reject(new Error('E-mail ou senha inválidos.'))
      }
      return response;
    } catch (e) {
      return Promise.reject(new Error('Não foi possível acessar o servidor no momento!'));
    }
  };
}

export default AuthService;