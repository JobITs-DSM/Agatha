import { FC } from "react";
import * as S from "./styles";
import { color } from "../../../../styles";

export const ListBody: FC = (): JSX.Element => {
  return (
    <S.BodyContainer>
      <S.Checkbox>
        <input type="checkbox" />
      </S.Checkbox>
      <S.WhiteText>세트라멘토 킹즈</S.WhiteText>
      <S.GrayText>대전</S.GrayText>
      <S.WhiteText>웹서비스</S.WhiteText>
      <S.GrayText>100~200명</S.GrayText>
      <S.LightGrayText>3억</S.LightGrayText>
      <S.ColoredText color={color.blue200}>참여기업</S.ColoredText>
      <S.LightGrayText>Y</S.LightGrayText>
      <S.LightGrayText>N</S.LightGrayText>
      <S.GrayText>2020년</S.GrayText>
      <S.GrayText>5명</S.GrayText>
      <S.WhiteUnderlined>5건</S.WhiteUnderlined>
    </S.BodyContainer>
  );
};

export const ListHeader: FC = (): JSX.Element => {
  return (
    <S.HeaderContainer>
      <S.Checkbox>
        <input type="checkbox" />
      </S.Checkbox>
      <S.HeadText>기업명</S.HeadText>
      <S.HeadText>지역</S.HeadText>
      <S.HeadText>사업분야</S.HeadText>
      <S.HeadText>근로자수</S.HeadText>
      <S.HeadText>매출액</S.HeadText>
      <S.HeadText>기업구분</S.HeadText>
      <S.HeadText>협약</S.HeadText>
      <S.HeadText>개발컨텍</S.HeadText>
      <S.HeadText>최근의뢰</S.HeadText>
      <S.HeadText>취업학생</S.HeadText>
      <S.HeadText>후기</S.HeadText>
    </S.HeaderContainer>
  );
};
