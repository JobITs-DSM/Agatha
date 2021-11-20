import { FC } from "react";
import * as S from "../styles";

export const ListHeader: FC = (): JSX.Element => {
  const RecruitArr = ["기업명", "현장실습", "근로계약"];
  return (
    <S.HeaderContainer>
      {RecruitArr.map((value, index) => {
        return <S.HeadGrayText key={index}>{value}</S.HeadGrayText>;
      })}
    </S.HeaderContainer>
  );
};

export const ListBody: FC = (): JSX.Element => {
  return (
    <S.BodyContainer>
        <S.WhiteText>세크라멘토 킹즈</S.WhiteText>
        <S.GrayText>1명</S.GrayText>
        <S.GrayText>1명</S.GrayText>
    </S.BodyContainer>
  );
};
