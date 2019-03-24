import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const { Provider, Consumer } = React.createContext();

const Store = ({ children }) => {
  const [auth, setAuth] = useState(false);
  return <Provider value={{ auth, setAuth }}>{children}</Provider>;
};

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;
