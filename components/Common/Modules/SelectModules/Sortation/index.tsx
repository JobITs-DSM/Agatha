import { FC } from "react";
import * as M from "../styles";

const Sortation: FC = (): JSX.Element => {
  return (
    <M.Box>
      <M.FilterName>구분</M.FilterName>
      <M.Selection width={"200px"}>
        <option>2021</option>
      </M.Selection>
    </M.Box>
  );
};

export default Sortation;
