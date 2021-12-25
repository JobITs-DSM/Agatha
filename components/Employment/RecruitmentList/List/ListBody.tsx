import { FC } from "react";
import * as S from "../styles";

const ListBody: FC = (): JSX.Element => {
  return (
    <S.BodyContainer>
        <S.WhiteText>세크라멘토 킹즈</S.WhiteText>
        <S.GrayText>1명</S.GrayText>
        <S.GrayText>1명</S.GrayText>
    </S.BodyContainer>
  );
};

export default ListBody;