import React from 'react';
import styled from 'styled-components';
import EditBills from '../EditBills';

const BillWraper = styled.div`
  display: flex;
  flex-direction: column;
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
const TopWraper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 8px;
  & > * {
    padding: 0 8px;
  }
`;
const BottomWraper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
const ButtonWraper = styled.button`
  color: #f9f9f9;
  padding: 8px 16px;
  background-color: hsla(0, 0%, 25%, 1);
  border-radius: 4px;
  margin: 0 8px;
  width: 100px;
`;
const Button = ({children, handleClick}) => (
  <ButtonWraper onClick={handleClick}>{children}</ButtonWraper>
);

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
    <BillWraper key={id}>
      <TopWraper>
        <p>{description}</p>
        <p>{amountOfMoney}</p>
        <p>{date}</p>
      </TopWraper>
      <BottomWraper>
        {editable ? <EditBills id={id} date={newDate} /> : null}
        <div>
          <Button handleClick={() => handleDelete(id)}>R</Button>
          <Button handleClick={() => handleEdit(id)}>E</Button>
        </div>
      </BottomWraper>
    </BillWraper>
  );
};
export default BillTile;
