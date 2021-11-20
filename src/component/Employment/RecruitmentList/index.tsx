import { FC } from "react";
import * as S from "./styles";
import { ListHeader, ListBody } from "./List";

const RecruitmentList: FC = (): JSX.Element => {
  const Arr = [];
  for (let i = 0; i < 20; i++) {
    Arr.push(i);
  }

  return (
    <S.Container>
      <S.HeadGrayText>모집 의뢰기업</S.HeadGrayText>
      <S.Body>
        <ListHeader />
        <S.Box>
          {
            Arr.map((value) => {
              return <ListBody key={value}/>
            })
          }
        </S.Box>
      </S.Body>
    </S.Container>
  );
};

export default RecruitmentList;
