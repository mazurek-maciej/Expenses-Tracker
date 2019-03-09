import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

const StyledDateField = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDateLabel = styled.label``;

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
