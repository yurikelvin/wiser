import React, { useRef } from 'react';
import { ClearContainer, Error, InputContainer, InputWrapper } from '../../styles/components/Input';
import CloseIcon from '../../assets/img/close.svg';

export default function Input({ disableClearOption=false, type, onChange, error, value, placeholder }) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClearValueClick = () => {
    onChange('');
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <InputWrapper>
      <InputContainer error={error}>
        <input
          value={value}
          ref={inputRef}
          className="flex-1 outline-none bg-body without-border"
          type={type}
          placeholder={placeholder}
          onChange={e => {
            e.stopPropagation();
            e.preventDefault();
            onChange(e.target.value);
          }}
        />
        {value !== null && value.trim() !== '' && !disableClearOption && (
          <ClearContainer error={error} onClick={handleClearValueClick}>
            <CloseIcon className="closeIcon" width={20} height={20} title="Limpar" />
          </ClearContainer>
        )}
      </InputContainer>
      {error && <Error>{error}</Error>}
    </InputWrapper>
  )
}