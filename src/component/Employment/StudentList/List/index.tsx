import { FC } from "react";
import * as S from "../styles";

export const ListHeader: FC = (): JSX.Element => {
  const RecruitArr = ["학번", "이름", "파견일자", "종료일자"];
  return (
    <S.HeaderContainer>
      <S.Checkbox>
          <input type="checkbox" />
        </S.Checkbox>
      {RecruitArr.map((value, index) => {
        return <S.HeadGrayText key={index}>{value}</S.HeadGrayText>;
      })}
    </S.HeaderContainer>
  );
};

export const ListBody: FC = (): JSX.Element => {
  return (
    <S.BodyContainer>
        <S.Checkbox>
          <input type="checkbox" />
        </S.Checkbox>
        <S.WhiteText>2119</S.WhiteText>
        <S.WhiteText>조준서</S.WhiteText>
        <S.GrayText>2020년 10월 10일</S.GrayText>
        <S.GrayText>2020년 10월 10일</S.GrayText>
    </S.BodyContainer>
  );
};
