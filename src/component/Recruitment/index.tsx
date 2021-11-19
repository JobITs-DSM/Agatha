import { FC } from "react";
import * as M from "../Modules/ListModules/styles";
import { ListHeader, ListBody } from "./List";

const Recruitment: FC = (): JSX.Element => {
  const StatusArr = ["접수", "모집전", "모집중"];

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
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
          <ListBody />
        </M.Box>
      </M.Body>
    </M.ContainerStyle>
  );
};

export default Recruitment;
