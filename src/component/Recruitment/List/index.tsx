import { FC } from "react";
import * as S from "./styles";
import { color } from "../../../../styles";

export const ListBody: FC = (): JSX.Element => {
  return (
    <S.BodyContainer>
      <S.Checkbox>
        <input type="checkbox" />
      </S.Checkbox>
      <S.ColoredText color={color.red100}>접수 요청</S.ColoredText>
      <S.WhiteUnderlinedText>세크라멘토 킹즈</S.WhiteUnderlinedText>
      <S.WhiteText>웹 프론트엔드</S.WhiteText>
      <S.GrayText>참여기업</S.GrayText>
      <S.LighterGray>1명</S.LighterGray>
      <S.GreyUnderlinedText>2명</S.GreyUnderlinedText>
      <S.GrayText>2020년 10월 20일</S.GrayText>
      <S.GrayText>2020년 10월 20일</S.GrayText>
    </S.BodyContainer>
  );
};

export const ListHeader: FC = (): JSX.Element => {
  const HeadArr = [
    "상태",
    "기업명",
    "채용직군",
    "구분",
    "모집인원",
    "지원자",
    "모집 시작일",
    "모집 종료일",
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
