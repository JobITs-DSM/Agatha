import { FC } from "react";
import * as S from "./styles";
import { color } from "../../../styles";

export const ListHeader: FC = (): JSX.Element => {
  const HeadArr = [
    "기업명",
    "지역",
    "산업분야",
    "근로자수",
    "매출액",
    "기업구분",
    "협약",
    "개발컨텍",
    "최근의뢰",
    "취업학생",
    "후기",
  ];
  return (
    <S.HeaderContainer>
      <S.Checkbox>
        <input type="checkbox" />
      </S.Checkbox>
      {HeadArr.map((value, index) => {
        return <S.HeadText key={index}>{value}</S.HeadText>;
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
