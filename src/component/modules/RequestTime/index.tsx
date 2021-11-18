import { FC } from "react";
import * as M from "../styles";
import * as S from "./styles";

const RequestTime: FC = (): JSX.Element => {
  return (
    <M.Box>
      <M.FilterName>의뢰 일자</M.FilterName>
      <S.SelectionBox>
        <M.Selection>
          <M.Option>2021</M.Option>
        </M.Selection>
        <M.Selection>
          <M.Option>2021</M.Option>
        </M.Selection>
      </S.SelectionBox>
    </M.Box>
  );
};

export default RequestTime;
