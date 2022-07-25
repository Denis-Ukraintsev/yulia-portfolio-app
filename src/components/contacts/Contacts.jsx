import React from "react";
import styled from "styled-components";
import { auxiliary, main, text } from "../../theme/colors/colors";
import { vk } from "../../theme/icons/icons";

const Contacts = () => {
  return (
    <Root>
      <Content>
        <Title>Contacts</Title>
        <Subtitle>
          Want to know more or just chat? <br />
          You are welcome!
        </Subtitle>
        <Button>Send message</Button>
        <Icons>{vk}</Icons>
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
    background-color: ${main};
    width: 75px;
  }
`;

const Button = styled.button`
  color: white;
  background-color: #070707;
  align-self: center;
  border-radius: 5px;
  width: 150px;
  height: 42px;
  margin: 20px;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
`;

export default Contacts;
