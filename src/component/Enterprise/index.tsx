import { FC } from "react";
import * as M from "../Modules/ListModules/styles";
import { ListBody, ListHeader } from "../Recruitment/List";

const Enterprise: FC = (): JSX.Element => {
  const StatusArr = ["선도기업 등록", "참여기업 등록", "협약 등록"];

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
          <ListBody />
        </M.Box>
      </M.Body>
    </M.ContainerStyle>
  );
};

export default Enterprise;
