import React from "react";
import styled from "styled-components";

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInputLabel = styled.label``;

const StyledInput = styled.input`
  max-width: 300px;
  width: 100%;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid lightgray;
`;
const InputComponent = ({ input, label, meta }) => {
  return (
    <StyledInputField className="field">
      <StyledInputLabel className="label">{label}</StyledInputLabel>
      <StyledInput {...input} />
      {meta.touched && meta.error && (
        <label className="help is-danger">{meta.error}</label>
      )}
    </StyledInputField>
  );
};

export default InputComponent;
