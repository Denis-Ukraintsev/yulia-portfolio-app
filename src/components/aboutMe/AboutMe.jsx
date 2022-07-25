import React from "react";
import styled from "styled-components";
import { auxiliary, text } from "../../theme/colors/colors";

const AboutMe = () => {
  return (
    <Root>
      <Content>
        <Title>About me</Title>
        <Subtitle>
          Hi, I'm Julia – photographer from Sochi <br />
          <br />
          You will fall in love with yourself <br />
          Expert in patient shots
        </Subtitle>
      </Content>
      {/* add your new text below */}
      <Subtitle></Subtitle>
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
const Subtitle = styled.div`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin-bottom: 10px;
`;

export default AboutMe;
