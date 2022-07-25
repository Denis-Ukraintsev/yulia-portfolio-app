import React from "react";
import styled from "styled-components";
import homepageWallpaper from "../../theme/homepagePhotos/homepageWallpaper.jpg";
import { main, text } from "../../theme/colors/colors";

const Homepage = () => {
  return (
    <Root>
      <Content>
        <Title>
          JULIA <br />
          CHUBKO
        </Title>
        <Subtitle>
          Beauty Photographer <br />
          Sochi
        </Subtitle>
      </Content>
      <Img src={homepageWallpaper} alt="homepage Wallpaper" />
    </Root>
  );
};

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 943.61px;
  height: 678px;
  border: 1px solid ${text};
  margin-top: -1px;
  background-color: ${main};
`;

const Content = styled.div`
  display: flex;
  width: 943.61px;
  /* align-items: flex-end; */
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 47.3392px;
  line-height: 55px;
  margin: 30px 62px;
  margin-right: 130px;
`;

const Subtitle = styled.div`
  align-self: center;
  font-size: 18px;
  line-height: 22px;
  margin: 30px -10px;
  text-align: center;
`;

const Img = styled.img`
  height: 450px;
  width: 943.61px;
`;

export default Homepage;
