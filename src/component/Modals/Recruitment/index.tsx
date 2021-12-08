import { FC } from "react";
import * as S from "./styles";
import List from "./List/List";

const RecruitModal: FC = (): JSX.Element => {
  const listHeaderArr = ["학번", "이름", "지원일자"];

  const testData = [
    {
      number: 2119,
      name: "조준서",
      date: "2021년 1월 31일",
    },
    {
      number: 2119,
      name: "조준서",
      date: "2021년 1월 31일",
    },
    {
      number: 2119,
      name: "조준서",
      date: "2021년 1월 31일",
    },
    {
      number: 2119,
      name: "조준서",
      date: "2021년 1월 31일",
    },
  ];

  return (
    <S.Wrapper>
      <S.ModalContainer>
        <div className="title">지원자 목록 조회</div>
        <S.ListBox>
          <S.ListHead>
            {listHeaderArr.map((value) => {
              return <div>{value}</div>;
            })}
          </S.ListHead>
          <S.ListBody>
            {testData.map((value) => {
              return (
                <List
                  number={value.number}
                  name={value.name}
                  date={value.date}
                />
              );
            })}
          </S.ListBody>
        </S.ListBox>
      </S.ModalContainer>
    </S.Wrapper>
  );
};

export default RecruitModal;
