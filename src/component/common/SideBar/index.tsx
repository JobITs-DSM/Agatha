import { FC } from "react";
import { useRouter } from "next/router";
import { color } from "../../../../styles";
import * as S from "./styles";
const SideBar: FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <S.SideBarContainer>
      <S.Introduction>
        <S.DetailText>Company Management</S.DetailText>
        <S.NameText>JobIts</S.NameText>
      </S.Introduction>
      <S.MenuTab>
        <S.MenuTabText>Menu Bar</S.MenuTabText>
        <S.MenuLinks href="/recruitment">
          <S.Links
            background={
              router.pathname === "/recruitment"
                ? `${color.blue100}`
                : "inherit"
            }
          >
            모집 의뢰서 관리
          </S.Links>
        </S.MenuLinks>
        <S.MenuLinks href="/enterprise">
          <S.Links
            background={
              router.pathname === "/enterprise" ? `${color.blue100}` : "inherit"
            }
          >
            기업 관리
          </S.Links>
        </S.MenuLinks>
        <S.MenuLinks href="/employment">
          <S.Links
            background={
              router.pathname === "/employment" ? `${color.blue100}` : "inherit"
            }
          >
            취업 관리
          </S.Links>
        </S.MenuLinks>
      </S.MenuTab>
      <S.Footer>
        <S.ByTeam>
          <S.Text>2021 by</S.Text>
          <S.Team>Team JobIts</S.Team>
        </S.ByTeam>
        <S.ExplanationBox>
          <S.Text>자비츠 팀에서 개발한</S.Text>
          <S.Text>회사 관리 자동화 프로그램입니다.</S.Text>
        </S.ExplanationBox>
      </S.Footer>
    </S.SideBarContainer>
  );
};

export default SideBar;
