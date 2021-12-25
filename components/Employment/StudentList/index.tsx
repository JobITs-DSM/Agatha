import { FC } from "react";
import * as S from "./styles";
import { Mode } from "../../../states/atoms/Employment"
import { ListHeader, ListBody } from "./List";
import { useRecoilState } from "recoil";

const StudentList: FC = (): JSX.Element => {
  const [mode, setMode] = useRecoilState(Mode);

  const Arr = [];
  for (let i = 0; i < 20; i++) {
    Arr.push(i);
  }

  const changeMode = () => {
    setMode(!mode);
  }

  return (
    <S.Container>
      <S.HeadGrayText>{mode ? "현장 실습 학생 목록" : "근로 계약 학생 목록"}</S.HeadGrayText>
      <S.Body>
        <ListHeader />
        <S.Box>
          {Arr.map((value) => {
            return <ListBody key={value} />;
          })}
        </S.Box>
        <S.SwitchMode value={mode ? "근로계약 전환" : "현장 실습 전환"} type="button" onClick={changeMode}/>
      </S.Body>
    </S.Container>
  );
};

export default StudentList;
