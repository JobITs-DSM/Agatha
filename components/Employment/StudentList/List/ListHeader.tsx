import { FC } from "react";
import * as S from "../styles";
import { EmploymentChecked } from "../../../../states/atoms/Employment";
import { useRecoilState } from "recoil";

const ListHeader: FC = (): JSX.Element => {
  const RecruitArr = ["학번", "이름", "파견일자", "종료일자"];
  const [checked, setChecked] = useRecoilState(EmploymentChecked);

  const changeChecked = () => {
    setChecked(!checked);
  };

  return (
    <S.HeaderContainer>
      <S.Checkbox>
        <input type="checkbox" onClick={changeChecked} />
      </S.Checkbox>
      {RecruitArr.map((value, index) => {
        return <S.HeadGrayText key={index}>{value}</S.HeadGrayText>;
      })}
    </S.HeaderContainer>
  );
};

export default ListHeader;
