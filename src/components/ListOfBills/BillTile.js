import React from 'react';
import EditBills from '../EditBills';

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
    <div className="content box" key={id}>
      <p>Bill description: {description}</p>
      <p>Amount of money: {amountOfMoney}</p>
      <p>Bill date: {date}</p>
      {editable ? <EditBills id={id} date={newDate} /> : null}
      <button onClick={() => handleDelete(id)}>Remove bill</button>
      <button onClick={() => handleEdit(id)}>Edit bill</button>
    </div>
  );
};
export default BillTile;
