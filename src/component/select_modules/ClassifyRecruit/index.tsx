import { FC } from "react";
import * as M from "../styles";

const ClassifyRecruit: FC = (): JSX.Element => {
  return (
    <M.Box>
      <M.FilterName>모집구분</M.FilterName>
      <M.Selection>
        <M.Option>전체</M.Option>
      </M.Selection>
    </M.Box>
  );
};

export default ClassifyRecruit;
