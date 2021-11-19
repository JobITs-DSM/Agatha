import { FC } from "react";
import * as M from "../Modules/ListModules/Styles/listStyles";
import { ListBody, ListHeader } from "../Modules/ListModules/List";

const Enterprise: FC = (): JSX.Element => {
  const StatusArr = ["선도기업 등록", "참여기업 등록", "협약 등록"];

  return (
    <M.ContainerStyle>
      <M.HeadStyle>
        {StatusArr.map((value, index) => {
          return <M.StatusStyle key={index}>{value}</M.StatusStyle>;
        })}
      </M.HeadStyle>
      <M.BodyStyle>
        <ListHeader />
        <ListBody />
      </M.BodyStyle>
    </M.ContainerStyle>
  );
};

export default Enterprise;
