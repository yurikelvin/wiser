import React from 'react';
import Router from 'next/router';

import {
  Container,
  Title,
  ContentContainer,
  TitleContainer,
  SubTitle,
  AsideLogin,
  LogoContainer,
  LoginLogoLayer
} from '../../styles/pages/Login';
import LoginForm from '../../components/LoginForm';

export default function Login() {

  function redirectToHome() {
    Router.push('/');
  }

  const handleAfterSubmit = () => {
    redirectToHome();
  };

  return (
    <Container>
      <AsideLogin>
       <LoginLogoLayer />
       <LogoContainer />
      </AsideLogin>
      <ContentContainer>
        <TitleContainer>
          <Title>Olá, seja</Title>
          <Title>bem-vindo!</Title>
        </TitleContainer>
        <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
        <LoginForm handleAfterSubmit={handleAfterSubmit} />
      </ContentContainer>
      
    </Container>
  )
}