import React from 'react';
import styled from 'styled-components';
import {Done} from 'styled-icons/material/Done';
import {Edit} from 'styled-icons/material/Edit';
import {Close} from 'styled-icons/material/Close';
import ListActionsButton from '../../Buttons/ListActionsButton';

const SubmitButton = styled.button`
  color: #f9f9f9;
  background-color: transparent;
  padding: 4px 8px;
  border: 1px solid teal;
  border-radius: 8px;
  background-color: hsla(0, 0%, 25%, 1);
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
  display: flex;
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
  return (
    <BottomWraper>
      <SubmitButton type="submit">
        <StyledDone />
      </SubmitButton>
      <ButtonsWraper>
        <ListActionsButton handleClick={() => handleEditEditable(billId)}>
          <StyledEditIcon />
        </ListActionsButton>
        <ListActionsButton handleClick={() => handleDeleteEditable(billId)}>
          <StyledCloseIcon />
        </ListActionsButton>
      </ButtonsWraper>
    </BottomWraper>
  );
};

export default BottomEditComponent;
