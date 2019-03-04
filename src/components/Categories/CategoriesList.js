import React from 'react';

const CategoriesList = ({categories}) => {
  return categories.map(cat => {
    return <p key={cat.id}>{cat.category}</p>;
  });
};

export default CategoriesList;
