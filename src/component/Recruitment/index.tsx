import { FC } from "react";
import {
  ListContainer,
  ListHeader,
  SelectStatus,
} from "../../modules/ListModules";

const Recruitment: FC = (): JSX.Element => {
  const StatusArr = ["접수", "모집전", "모집중"];

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

export default Recruitment;
