import { FC } from "react";
import * as M from "../Modules/ListModules/styles";
import { ListBody, ListHeader } from "./List";

const Enterprise: FC = (): JSX.Element => {
  const StatusArr = ["선도기업 등록", "참여기업 등록", "협약 등록"];
  let TestArr = [];
  for (let i = 0; i < 20; i++) {
    TestArr.push(i);
  }

  return (
    <M.ContainerStyle>
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
    </M.ContainerStyle>
  );
};

export default Enterprise;
