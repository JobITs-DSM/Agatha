import { FC } from "react";
import * as S from "./styles";
import * as M from "../styles";

const Date: FC = (): JSX.Element => {
  return (
    <S.Container>
      <M.Box>
        <S.FilterName>파견일자</S.FilterName>
        <S.Selection />
      </M.Box>
      <M.Box>
        <S.FilterName>종료일자</S.FilterName>
        <S.Selection />
      </M.Box>
      <S.ChangeDate type="button" value="일자변경" />
    </S.Container>
  );
};

export default Date;
