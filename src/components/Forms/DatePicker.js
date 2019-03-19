import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

const StyledDateField = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;
const DatePickerStyle = styled.div`
  width: 300px;
  height: 24px;
  color: white;
  padding: 4px 8px;
  border: 1px solid red;
`;
const StyledDateLabel = styled.label`
  color: ${({ theme }) => theme.colors.$D10};
`;

const DatePickerComponent = ({ props, presentDate }) => {
  const { input, label } = props;

  return (
    <StyledDateField>
      <StyledDateLabel>{label}</StyledDateLabel>
      <DatePicker
        selected={input.value || presentDate}
        onChange={input.onChange}
        dateFormat="MMMM d, yyyy"
        {...props}
      />
    </StyledDateField>
  );
};

DatePickerComponent.propTypes = {
  input: PropTypes.object,
  props: PropTypes.object.isRequired,
  presentDate: PropTypes.instanceOf(Date),
  value: PropTypes.string,
  label: PropTypes.string,
};

export default DatePickerComponent;
