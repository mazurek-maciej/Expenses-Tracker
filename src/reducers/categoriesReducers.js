const initialState = [
  {
    id: 0,
    category: 'Expenses',
  },
  {
    id: 1,
    category: 'Car',
  },
];

export const categoriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      console.log('category added successfuly');
      return [...state, action.payload];
    case 'REMOVE_CATEGORY':
      console.log('category removed successfuly');
      return state.filter(category => category.id !== action.payload);
    default:
      return state;
  }
};
