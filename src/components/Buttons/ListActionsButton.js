import React from 'react';
import styled from 'styled-components';

const ButtonWraper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: 4px 8px;
  padding: 4px 8px;
  border: 1px solid teal;
  border-radius: 8px;
`;
const ListActionsButton = ({children, handleClick}) => (
  <ButtonWraper type="button" onClick={handleClick}>
    {children}
  </ButtonWraper>
);

export default ListActionsButton;
