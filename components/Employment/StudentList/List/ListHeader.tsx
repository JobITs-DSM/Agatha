import { FC } from "react";
import * as S from "../styles";
import { EmploymentChecked } from "../../../../states/atoms/Employment";

const ListHeader: FC = (): JSX.Element => {
  const RecruitArr = ["학번", "이름", "파견일자", "종료일자"];
  return (
    <S.HeaderContainer>
      <S.Checkbox>
        <input type="checkbox" />
      </S.Checkbox>
      {RecruitArr.map((value, index) => {
        return <S.HeadGrayText key={index}>{value}</S.HeadGrayText>;
      })}
    </S.HeaderContainer>
  );
};

export default ListHeader;
