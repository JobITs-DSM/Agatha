import React, { FC } from "react";
import SideBar from "../Sidebar";
import Header from "../Header";
import * as S from "./styles";
import MainContainer from "../MainContainer/MainContainer";

interface AppLayoutPage {
  children: React.ReactNode;
}

const Layout: FC = ({ children }: AppLayoutPage) => {
  return (
    <S.Container>
      <SideBar />
      <MainContainer>
        <Header />
        {children}
      </MainContainer>
    </S.Container>
  );
};

export default Layout;
