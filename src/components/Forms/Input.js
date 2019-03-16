import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInputField = styled.div`
  max-width: 300px;
  width: 100%;
`;
const StyledInputLabel = styled.label`
  color: ${({ theme }) => theme.colors.$D10};
`;

const StyledInput = styled.input`
  max-width: 300px;
  width: 100%;
  padding: 4px 8px;
  font-size: ${({ theme }) => theme.size.$normal};
  color: ${({ theme }) => theme.colors.$D13};
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.$D13};
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.$D13};
    border-radius: 4px;
  }
`;
const InputComponent = ({ input, label, meta }) => (
  <StyledInputField className="field">
    <StyledInputLabel>{label}</StyledInputLabel>
    <StyledInput {...input} />
    {meta.touched && meta.error && (
      <label className="help is-danger">{meta.error}</label>
    )}
  </StyledInputField>
);

InputComponent.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
};

export default InputComponent;
