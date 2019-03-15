import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const StyledSelectField = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 100%;
`;
const StyledSelectLabel = styled.label`
  color: ${({ theme }) => theme.colors.$D10};
`;

const SelectComponent = ({ props, options }) => (
  <StyledSelectField className="field">
    <Select
      options={options}
      value={props.input.value}
      onChange={props.input.onChange}
      {...props}
    />
  </StyledSelectField>
);

export default SelectComponent;
