import { FC } from "react";
import {
  ListContainer,
  ListHeader,
  SelectStatus,
} from "../../modules/ListModules";

const Enterprise: FC = (): JSX.Element => {
  const StatusArr = ["선도기업 등록", "참여기업 등록", "협약 등록"];

  return (
    <ListContainer>
      <ListHeader>
        {StatusArr.map((value, index) => {
          return <SelectStatus key={index}>{value}</SelectStatus>;
        })}
      </ListHeader>
    </ListContainer>
  );
};

export default Enterprise;
