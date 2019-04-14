import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

const PosedLinks = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 300,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 80px);
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;
const Links = styled(Link)`
  display: flex;
  font-size: ${({ theme }) => theme.size.$h2};
  color: ${({ theme }) => theme.colors.$title};
  margin: 2rem 0;
  padding: 0 4px;
  position: relative;
  ::after {
    content: '';
    bottom: 0;
    left: 0;
    position: absolute;
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.colors.$title};
  }
`;
const LinksWrapper = styled(PosedLinks)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;
const TitleWrapper = styled.div`
  align-self: flex-start;
  position: relative;
  margin: 32px 0 16px 16px;
`;
const H2 = styled.h2`
  font-size: ${({ theme }) => theme.size.$h2};
  color: ${({ theme }) => theme.colors.$D13};
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.$D13};
    bottom: 0;
    left: 0;
  }
`;

const AddScreen = () => (
  <Wrapper>
    <TitleWrapper>
      <H2>Add new</H2>
    </TitleWrapper>
    <LinksWrapper initialPose="exit" pose="enter">
      <Links to="new-wallet">Wallet</Links>
      <Links to="new-finance">Finance</Links>
      <Links to="new-category">Category</Links>
    </LinksWrapper>
  </Wrapper>
);

export default AddScreen;
