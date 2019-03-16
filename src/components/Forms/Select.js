import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styled, { css } from 'styled-components';

const StyledSelectField = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 100%;
`;
const StyledSelectLabel = styled.label`
  color: ${({ theme }) => theme.colors.$D10};
`;

const SelectComponent = ({ props, options }) => {
  const { label, input } = props;
  return (
    <StyledSelectField className="field">
      <StyledSelectLabel>{label}</StyledSelectLabel>
      <Select
        options={options}
        value={input.value}
        onChange={input.onChange}
        {...props}
      />
    </StyledSelectField>
  );
};

SelectComponent.propTypes = {
  input: PropTypes.object,
  props: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
};

export default SelectComponent;
