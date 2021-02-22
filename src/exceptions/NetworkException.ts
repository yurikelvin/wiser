const NetworkException = error => {
  if (error && error.message === 'Network Error') {
    return Promise.reject(new Error('No momento não foi possível acessar a rede da Wiser.'));
  }

  return Promise.reject(error);
};
export default NetworkException;
