import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

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
  return (
    <StyledDateField>
      <StyledDateLabel>{props.label}</StyledDateLabel>
      <DatePicker
        selected={props.input.value || presentDate}
        onChange={props.input.onChange}
        dateFormat="MMMM d, yyyy"
        {...props}
      />
    </StyledDateField>
  );
};

export default DatePickerComponent;
