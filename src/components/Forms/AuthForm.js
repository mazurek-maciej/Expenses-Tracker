import styled from 'styled-components';
import { device } from '../../theme/theme';

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    margin: 0 8px;
  }
`;
export default AuthForm;
