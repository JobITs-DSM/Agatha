import { FC } from "react";
import * as S from "./styles";
import * as M from "../styles";
import { Mode } from "../../../states/atoms/Employment";
import { useRecoilValue } from "recoil";

const Date: FC = (): JSX.Element => {
  const mode = useRecoilValue(Mode);

  return (
    <S.Container>
      {mode ? (
        <>
          <M.Box>
            <S.FilterName>파견일자</S.FilterName>
            <S.Selection />
          </M.Box>
          <M.Box>
            <S.FilterName>종료일자</S.FilterName>
            <S.Selection />
          </M.Box>
        </>
      ) : (
        <M.Box>
          <S.FilterName>근로 계약 일자</S.FilterName>
          <S.Selection />
        </M.Box>
      )}
      <S.ChangeDate type="button" value="일자변경" />
    </S.Container>
  );
};

export default Date;
