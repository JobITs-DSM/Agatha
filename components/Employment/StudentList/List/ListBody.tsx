import { FC } from "react";
import * as S from "../styles";
import { EmploymentChecked } from "../../../../states/atoms/Employment";

const ListBody: FC = (): JSX.Element => {
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

export default ListBody;
