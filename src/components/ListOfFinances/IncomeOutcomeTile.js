import React from 'react';
import styled from 'styled-components';
import {Edit} from 'styled-icons/material/Edit';
import {Close} from 'styled-icons/material/Close';
import EditFinance from '../EditFinance';
import ListActionsButton from '../Buttons/ListActionsButton';

const BillWraper = styled.div`
  display: flex;
  flex-direction: ${props => (props.editable ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #f9f9f9;
  position: relative;
  ::after {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    background-color: #f9f9f9;
    bottom: 0;
  }
`;
const StyledEditIcon = styled(Edit)`
  width: 32px;
  color: #f9f9f9;
`;
const StyledCloseIcon = styled(Close)`
  width: 32px;
  color: #f9f9f9;
`;
const LeftWraper = styled.div`
  flex: ${props => (props.editable ? null : '2')};
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 8px;
  & > * {
    padding: 0 8px;
  }
`;
const RightWrapper = styled.div`
  flex: ${props => (props.editable ? null : '1')};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const ButtonsWraper = styled.div`
  display: ${props => (props.editable ? 'none' : 'flex')};
  flex-direction: ${props => (props.editable ? 'column' : 'row')};
`;

const BillTile = ({
  id,
  description,
  amountOfMoney,
  date,
  newDate,
  editable,
  handleDelete,
  handleEdit,
}) => {
  return (
    <BillWraper key={id} editable={editable}>
      <LeftWraper editable={editable}>
        <p>{description}</p>
        <p>{amountOfMoney}zł</p>
        <p>{date}</p>
      </LeftWraper>
      <RightWrapper>
        {editable ? <EditFinance id={id} date={newDate} /> : null}
        <ButtonsWraper editable={editable}>
          <ListActionsButton handleClick={() => handleEdit(id)}>
            <StyledEditIcon />
          </ListActionsButton>
          <ListActionsButton handleClick={() => handleDelete(id)}>
            <StyledCloseIcon />
          </ListActionsButton>
        </ButtonsWraper>
      </RightWrapper>
    </BillWraper>
  );
};
export default BillTile;
