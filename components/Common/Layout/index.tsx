import React, { FC } from "react";
import SideBar from "../Sidebar";
import Header from "../Header";
import * as S from "./styles";
import MainContainer from "../MainContainer/MainContainer";
import RecruitModal from "../../Modals/Recruitment";
import EmploymentModal from '../../Modals/Enterprise/index';

interface AppLayoutPage {
  children: React.ReactNode;
}

const Layout: FC = ({ children }: AppLayoutPage) => {
  return (
    <S.Container>
      <RecruitModal />
      <EmploymentModal />
      <SideBar />
      <MainContainer>
        <Header />
        {children}
      </MainContainer>
    </S.Container>
  );
};

export default Layout;
