import { FC } from "react";
import * as M from "../Common/Modules/ListModules/styles";
import { ListHeader, ListBody } from "./List";

const Recruitment: FC = (): JSX.Element => {
  const StatusArr = ["접수", "모집전", "모집중"];
  let TestArr = [];
  for (let i = 0; i < 20; i++) {
    TestArr.push(i);
  }

  return (
      <M.Container>
        <M.Selector>
          {StatusArr.map((value, index) => {
            return <M.Status key={index}>{value}</M.Status>;
          })}
        </M.Selector>
        <M.Body>
          <ListHeader />
          <M.Box>
            {TestArr.map((v) => {
              return <ListBody key={v} />;
            })}
          </M.Box>
        </M.Body>
      </M.Container>
  );
};

export default Recruitment;
