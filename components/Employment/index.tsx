import { FC } from "react";
import * as S from "./styles";
import Date from "./Date";
import RecruitmentList from "./RecruitmentList";
import StudentList from "./StudentList";

const Employment: FC = (): JSX.Element => {
  return (
    <S.Container>
      <RecruitmentList />
      <Date />
      <StudentList />
    </S.Container>
  );
};

export default Employment;
