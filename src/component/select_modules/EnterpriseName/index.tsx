import { FC } from "react";
import * as M from "../styles";
import * as S from "./styles";

const EnterpriceName: FC = ():JSX.Element => {
  return (
    <M.Box>
      <M.FilterName>회사명</M.FilterName>
      <S.EnterpriseName type="text" placeholder={"회사명을 입력해주세요"}/>
    </M.Box>
  );
};

export default EnterpriceName;
