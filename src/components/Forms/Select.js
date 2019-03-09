import React from "react";
import Select from "react-select";
import styled from "styled-components";

const StyledSelectField = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledSelectLabel = styled.label``;

const SelectComponent = ({ props, options }) => {
  return (
    <StyledSelectField className="field">
      <StyledSelectLabel className="label">{props.label}</StyledSelectLabel>
      <Select
        options={options}
        value={props.input.value}
        onChange={props.input.onChange}
        {...props}
      />
    </StyledSelectField>
  );
};

export default SelectComponent;
