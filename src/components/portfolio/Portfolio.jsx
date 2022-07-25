import React from "react";
import styled from "styled-components";
import { auxiliary, text } from "../../theme/colors/colors";
import {
  love1,
  love2,
  love3,
} from "../../theme/portfolioPhotos/portfolioPhotos";

const Portfolio = () => {
  return (
    <Root>
      <Content>
        <Title>Portfolio</Title>
        <Icons>
          {love1}
          {love2}
          {love3}
        </Icons>
        <Subtitle>l o v e s t o r y</Subtitle>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  min-width: 943.61px;
  height: 506px;
  border: 1px solid ${text};
  margin-top: -1px;
  background-color: ${auxiliary};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 34px;
  line-height: 42px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 35px;
`;

const Icons = styled.div`
  align-self: center;
  img {
    width: 214.5px;
    margin: 0 10px;
  }
`;

const Subtitle = styled.div`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

export default Portfolio;
