import reducers from '../../src/store/modules/rootReducer';

test('set user logged request reducer', () => {
  let state;
  state = reducers({user:{loggedUser:null,loggedUserErrorMessage:''}}, {type:'SET_LOGGED_USER_REQUEST',payload:{user:{email:'flavio.augusto@gmail.com',password:'flavioaugusto'}}});
  expect(state).toEqual({user:{loggedUser:null,loggedUserErrorMessage:''}});
});

test('set user logged success reducer', () => {
  let state;
  state = reducers({user:{loggedUser:null,loggedUserErrorMessage:''}}, {type:'SET_LOGGED_USER_SUCCESS',payload:{user:{id:3,firstName:'Flávio',lastName:'Augusto',email:'flavio.augusto@gmail.com'}}});
  expect(state).toEqual({user:{loggedUser:{id:3,firstName:'Flávio',lastName:'Augusto',email:'flavio.augusto@gmail.com'},loggedUserErrorMessage:''}});
});

test('set user logged failure reducer', () => {
  let state;
  state = reducers({user:{loggedUser:null,loggedUserErrorMessage:''}}, {type:'SET_LOGGED_USER_FAILURE',payload:{message:'E-mail ou senha inválidos.'}});
  expect(state).toEqual({user:{loggedUser:null,loggedUserErrorMessage:'E-mail ou senha inválidos.'}});
});