import styled from 'styled-components';

export const Label = styled.label `
  font-weight: 400;
  color: #383E71;
  padding-left: 0.4rem;
  padding-bottom: 0.3rem;
  font-size: 0.9rem;
`

export const Button = styled.div`
  border-radius: 8px;
  box-shadow: 0px 10px 25px #CF99DB;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .inner-button-text {
    color: white;
  }
`

export const LoginErrorMessage = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  .error-message {
    color: #FF377F;
  }
`