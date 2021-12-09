import { FC } from "react";
import * as M from "../styles";

const Region: FC = (): JSX.Element => {
  return (
    <M.Box>
      <M.FilterName>지역</M.FilterName>
      <M.Selection width={"200px"}>
        <option>전체</option>
      </M.Selection>
    </M.Box>
  );
};

export default Region;
