import React from "react";
import styled from "styled-components";

const StyledAuthButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  border: 1px solid hsla(0, 0%, 10%, 1);
  border-radius: 4px;
  background-color: hsla(0, 0%, 25%, 1);
  font-size: 16px;
  color: #f9f9f9;
`;

const AuthButton = ({ onClick, icon, title }) => {
  return (
    <div>
      <StyledAuthButton onClick={onClick}>
        {icon ? (
          <i style={{ marginRight: "4px" }} className="fab fa-google" />
        ) : (
          <i class="fas fa-sign-out-alt" />
        )}
        {title}
      </StyledAuthButton>
    </div>
  );
};

export default AuthButton;
