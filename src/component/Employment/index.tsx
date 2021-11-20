import { FC } from "react";
import * as S from "./styles";
import Date from "./Date";
import RecruitmentList from "./RecruitmentList";
import StudentList from "./StudentList";

const Employment: FC = (): JSX.Element => {
  return (
    <S.Container>
      <RecruitmentList />
      <S.Box>
        <Date />
        <S.ChangeDate>일자 변경</S.ChangeDate>
      </S.Box>
      <StudentList />
    </S.Container>
  );
};

export default Employment;
