import styled from 'styled-components';

interface IInputContainer {
  error: string;
}

export const ClearContainer = styled.div<IInputContainer>`
  cursor: pointer;

  .closeIcon {
    color: ${props => props.error ? '#FF377F' : '#717171'}
  }

`

export const Error = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  padding-left: 0.5rem;
  margin-top: 0.5rem;
  color: #FF377F;
`

export const InputContainer = styled.div<IInputContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: ${props => props.error ? '1px solid #FF377F': '1px solid #989FDB'};
  border-radius: 8px;
  padding: 0.5rem;
  height: 3rem;
`

export const InputWrapper = styled.div`
  width: 256px;
  height: 100%;
  margin-bottom: 1rem;
`