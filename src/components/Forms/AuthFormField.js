import React from 'react';
import styled from 'styled-components';

const FormLabel = styled.label`
  color: ${({ theme }) => theme.colors.$label};
`;
const AuthFormField = ({ label, handleChange, placeholder }) => (
  <div className="field">
    <FormLabel className="label" htmlFor="password">
      {label}
    </FormLabel>
    <input
      className="input"
      type={
        label === 'email' ? 'email' : label === 'password' ? 'password' : 'text'
      }
      id={label}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </div>
);

export default AuthFormField;
