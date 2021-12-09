import { FC } from "react";
import * as M from "../styles";

const BuisinessField: FC = (): JSX.Element => {
  return (
    <M.Box>
      <M.FilterName>사업분야</M.FilterName>
      <M.Selection width={"200px"}>
        <option>전체</option>
      </M.Selection>
    </M.Box>
  );
};

export default BuisinessField;
