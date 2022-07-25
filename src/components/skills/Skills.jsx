import React from "react";
import styled from "styled-components";
import { main, text } from "../../theme/colors/colors";
import adobephotoshop from "../../theme/icons/adobephotoshop.svg";
import { photoshop, lightroomclassic } from "../../theme/icons/icons";

const Skills = () => {
  return (
    <Root>
      <Content>
        <Title>Skills</Title>
        <Subtitle>I work in such programs as</Subtitle>
        <Icons>
          {photoshop}
          {lightroomclassic}
          {/* add your new icons here like it done above */}
        </Icons>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  min-width: 943.61px;
  height: 506px;
  border: 1px solid ${text};
  margin-top: -1px;
  background-color: ${main};
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
const Subtitle = styled.div`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

const Icons = styled.div`
  align-self: center;
  img {
    margin: 20px;
    width: 50px;
    background-color: ${text};
    border-radius: 5px;
  }
`;

export default Skills;
