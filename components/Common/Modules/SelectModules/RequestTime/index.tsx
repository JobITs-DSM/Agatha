import { FC } from "react";
import * as M from "../styles";
import styled from "@emotion/styled";

const SelectionBoxStyle = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const RequestTime: FC = (): JSX.Element => {
  return (
    <M.Box>
      <M.FilterName>의뢰일자</M.FilterName>
      <SelectionBoxStyle>
        <M.Selection width={"200px"}>
          <option>2021</option>
        </M.Selection>
        <M.Selection width={"200px"}>
          <option>2021</option>
        </M.Selection>
      </SelectionBoxStyle>
    </M.Box>
  );
};

export default RequestTime;
