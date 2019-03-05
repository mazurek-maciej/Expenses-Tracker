import React from 'react';
import styled from 'styled-components';
import {Done} from 'styled-icons/material/Done';
import {Edit} from 'styled-icons/material/Edit';
import {Close} from 'styled-icons/material/Close';

const SubmitButton = styled.button`
  color: #f9f9f9;
  background-color: transparent;
  padding: 4px 8px;
  border-radius: 4px;
  width: 80px;
  margin: 4px;
`;
const BottomWraper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const StyledDone = styled(Done)`
  width: 32px;
  color: #f9f9f9;
`;
const ButtonsWraper = styled.div`
  align-self: center;
`;
const ButtonWraper = styled.a`
  padding: 8px 16px;
  border-radius: 4px;
  width: 100px;
`;
const StyledEditIcon = styled(Edit)`
  width: 32px;
  color: #f9f9f9;
`;
const StyledCloseIcon = styled(Close)`
  width: 32px;
  color: #f9f9f9;
`;

const BottomEditComponent = ({
  handleDeleteEditable,
  handleEditEditable,
  billId,
}) => {
  const Button = ({children, handleClick}) => (
    <ButtonWraper type="button" onClick={handleClick}>
      {children}
    </ButtonWraper>
  );
  return (
    <BottomWraper>
      <SubmitButton type="submit">
        <StyledDone />
      </SubmitButton>
      <ButtonsWraper>
        <Button handleClick={() => handleEditEditable(billId)}>
          <StyledEditIcon />
        </Button>
        <Button handleClick={() => handleDeleteEditable(billId)}>
          <StyledCloseIcon />
        </Button>
      </ButtonsWraper>
    </BottomWraper>
  );
};

export default BottomEditComponent;
