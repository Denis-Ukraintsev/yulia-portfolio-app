import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Homepage from "./components/homepage/Homepage";
import styled from "styled-components";
import { ROUTES } from "./helpers/navHelper";
import { Route, Routes } from "react-router-dom";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <Root>
      <Header />
      <AppWrapper>
        <ContentWrapper>
          <Routes>
            <Route path={ROUTES.HOMEPAGE} element={<Homepage />}></Route>
            <Route path={ROUTES.ABOUT_ME} element={<AboutMe />}></Route>
            <Route path={ROUTES.SKILLS} element={<Skills />}></Route>
            <Route path={ROUTES.PORTFOLIO} element={<Portfolio />}></Route>
            <Route path={ROUTES.CONTACTS} element={<Contacts />}></Route>
          </Routes>
        </ContentWrapper>
      </AppWrapper>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const AppWrapper = styled.div`
  display: flex;
  /* height: calc(100vh - 70px); */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  /* overflow-y: scroll; */
`;

export default App;
