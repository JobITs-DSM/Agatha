import React, { FC } from "react";
import SideBar from "../Sidebar";
import Header from "../Header";
import * as S from "./styles";

interface AppLayoutPage {
  children: React.ReactNode;
}

const Layout: FC = ({ children }: AppLayoutPage) => {
  return (
    <S.Container>
      <SideBar />
      <Header />
      {children}
    </S.Container>
  );
};

export default Layout;
