import React from "react";
import styled from "styled-components";

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
  font-size: ${({ theme }) => theme.size.$normal}
  border-radius: 8px;
  border: 1px solid lightgray;
`;
const InputComponent = ({ input, label, meta }) => {
  return (
    <StyledInputField className="field">
      <StyledInputLabel className="label">{label}</StyledInputLabel>
      <StyledInput placeholder="temporary content" {...input} />
      {meta.touched && meta.error && (
        <label className="help is-danger">{meta.error}</label>
      )}
    </StyledInputField>
  );
};

export default InputComponent;
