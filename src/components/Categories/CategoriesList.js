import React from 'react';
import Select from 'react-select';

const CategoriesList = ({
  categories,
  selectedCategory,
  handleSelectCategory,
}) => {
  const labeledCategories = [];
  categories.map(cat => {
    labeledCategories.push({
      value: cat.category,
      label: cat.category,
      id: cat.id,
    });
  });

  return (
    <div>
      <Select
        value={selectedCategory}
        onChange={handleSelectCategory}
        options={labeledCategories}
      />
    </div>
  );
};

export default CategoriesList;
