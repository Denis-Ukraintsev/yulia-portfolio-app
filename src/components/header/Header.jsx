import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../helpers/navHelper";
import styled from "styled-components";
import { main, text, link } from "../../theme/colors/colors";

const Header = () => {
  return (
    <Root>
      <Item>
        <NavLink to={ROUTES.HOMEPAGE}>Home</NavLink>
      </Item>
      <Item>
        <NavLink to={ROUTES.ABOUT_ME}>About me</NavLink>
      </Item>
      <Item>
        <NavLink to={ROUTES.SKILLS}>Skills</NavLink>
      </Item>
      <Item>
        <NavLink to={ROUTES.PORTFOLIO}>Portfolio</NavLink>
      </Item>
      <Item>
        <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
      </Item>
    </Root>
  );
};

const Root = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 943.61px;
  min-height: 86px;
  border: 1px solid ${text};
  background-color: ${main};
`;

const Item = styled.div`
  a {
    font-size: 18px;
    line-height: 22px;
    color: ${link};
    text-align: center;
    text-decoration: none;
    margin: 0 62px;
  }
`;

export default Header;
