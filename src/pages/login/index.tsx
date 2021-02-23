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
  LoginLogoLayer,
  Footer,
  Link,
  ContentContainerLayout,
  ContentContainerLayer,
  InnerContentContainer
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
      <ContentContainerLayout>
        <ContentContainer>
          <InnerContentContainer>

          <TitleContainer>
            <Title>Olá, seja</Title>
            <Title>bem-vindo!</Title>
          </TitleContainer>
          <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>
          <LoginForm handleAfterSubmit={handleAfterSubmit} />
          <Footer>
            <span>Esqueceu seu login ou senha?</span>
            <span>Clique <Link href="/login">aqui</Link></span>
          </Footer>
          </InnerContentContainer>
        </ContentContainer>
        <ContentContainerLayer />
      </ContentContainerLayout>
    </Container>
  )
}