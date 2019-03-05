import React from 'react';
import styled from 'styled-components';
import TopEditComponent from './TopEditComponent';
import BottomEditComponent from './BottomEditComponent';

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
`;
const EditComponent = ({
  handleSubmit,
  handleChangeDate,
  handleDeleteEditable,
  handleEditEditable,
  handleCategories,
  categoriesList,
  bills,
  date,
  getDesc,
  getMoney,
  billId,
}) => {
  const categoriesSelect = [];
  categoriesList.map(cat =>
    categoriesSelect.push({value: cat.category, label: cat.category}),
  );
  return (
    <EditForm onSubmit={handleSubmit}>
      <TopEditComponent
        getDesc={getDesc}
        getMoney={getMoney}
        bills={bills}
        handleChangeDate={handleChangeDate}
        handleCategories={handleCategories}
        categoriesSelect={categoriesSelect}
        date={date}
      />
      <BottomEditComponent
        billId={billId}
        handleEditEditable={handleEditEditable}
        handleDeleteEditable={handleDeleteEditable}
      />
    </EditForm>
  );
};
export default EditComponent;
