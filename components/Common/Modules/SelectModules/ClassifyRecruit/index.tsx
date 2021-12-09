import { FC } from "react";
import * as M from "../styles";

const ClassifyRecruit: FC = (): JSX.Element => {
  return (
    <M.Box>
      <M.FilterName>모집구분</M.FilterName>
      <M.Selection width={"200px"}>
        <option>전체</option>
      </M.Selection>
    </M.Box>
  );
};

export default ClassifyRecruit;
