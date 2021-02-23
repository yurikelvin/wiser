import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import Input from "../Input";
import { Label, Button, LoginErrorMessage } from "../../styles/components/LoginForm";

import { setLoggedUserRequest } from '../../store/modules/user/actions';
import { IUserStateRequest } from '../../store/modules/user/types';
import { IState } from '../../store';

const emailSchema = yup.object().shape({
  email: yup.string().email('Digite um e-mail válido;').required('Obrigatório')
});
const passwordSchema = yup.object().shape({
  password: yup.string().required('Obrigatório')
});

export default function LoginForm({ handleAfterSubmit }) {
  const dispatch = useDispatch();
  const loginErrorMessage = useSelector<IState, string>(state => state.user.loggedUserErrorMessage)
  const hasLoginErrorMessage = loginErrorMessage.trim() !== '';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = async (schema, valueField) => {
    let errorMessage = '';

    try {
      await schema.validate(valueField)
    } catch(e) {
      errorMessage += e.message;
    }

    return errorMessage;
  }

  const resetErrorFields = () => {
    setErrorEmail('');
    setErrorPassword('');
  }

  const isLoginFieldsValid = async () => {
    let isValid = true;

    const emailErrorMessage = await validateField(emailSchema, {email});

    if (emailErrorMessage.trim() !== '') {
      setErrorEmail(emailErrorMessage);
      isValid = false;
    }

    const passwordErrorMessage = await validateField(passwordSchema, {password});

    if (passwordErrorMessage.trim() !== '') {
      setErrorPassword(passwordErrorMessage);
      isValid = false;
    }

    if (isValid) {
      resetErrorFields();
    }

    return isValid;
  }

  const submitLoginData = useCallback((userData: IUserStateRequest ) => {
    dispatch(setLoggedUserRequest(userData))
  }, [dispatch]);

  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();
    if (!isSubmitting) {
      setIsSubmitting(true);


      if (await isLoginFieldsValid()) {
        submitLoginData({ email, password })

        setTimeout(() => {
          if (loginErrorMessage.trim() === '') {
            handleAfterSubmit()
          }
        }, 2000)
      }

      setIsSubmitting(false);
    }
  }

  const handleMailChange = async value => {
    setEmail(value);
  }

  const handlePasswordChange = value => {
    setPassword(value);
  }

  return (
    <div className="w-16">
      <div className="flex flex-column">
        <Label>E-MAIL</Label>
        <Input type="text" onChange={handleMailChange} value={email} placeholder="user.name@mail.com" error={errorEmail} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Label>SENHA</Label>
        <Input type="password" disableClearOption onChange={handlePasswordChange} value={password} placeholder="*******" error={errorPassword} />
      </div>
      { hasLoginErrorMessage && (
        <LoginErrorMessage>
          <span className="error-message">
            {loginErrorMessage}
          </span>
        </LoginErrorMessage>
      )}
      <Button onClick={handleSubmit}>
        <span className="inner-button-text">ENTRAR</span>
      </Button>
    </div>
  )
}