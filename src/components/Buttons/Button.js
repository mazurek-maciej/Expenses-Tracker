import styled from 'styled-components';

const Button = styled.button`
  align-self: flex-start;
  margin: 0 4px;
  width: 100px;
  height: 36px;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  border: 1px solid transparent;
  background-color: ${({ secondary, theme }) =>
    secondary ? `${theme.colors.$primaryMinor}` : `${theme.colors.$primary}`};
  color: ${({ theme }) => theme.colors.$text};
  font-size: ${({ theme }) => theme.size.$normal};
  a {
    color: ${({ theme }) => theme.colors.$text};
  }
`;

export default Button;
