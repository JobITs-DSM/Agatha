import { FC } from "react";
import * as M from "../Modules/ListModules/Styles/listStyles";
import { ListHeader, ListBody } from "../Modules/ListModules/List";

const Recruitment: FC = (): JSX.Element => {
  const StatusArr = ["접수", "모집전", "모집중"];

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
        <ListBody />
        <ListBody />
        <ListBody />
        <ListBody />
        <ListBody />
        <ListBody />
      </M.BodyStyle>
    </M.ContainerStyle>
  );
};

export default Recruitment;
