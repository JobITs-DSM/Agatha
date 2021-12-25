import { FC } from "react";
import * as S from "../styles";

const ListHeader: FC = (): JSX.Element => {
  const RecruitArr = ["기업명", "현장실습", "근로계약"];
  return (
    <S.HeaderContainer>
      {RecruitArr.map((value, index) => {
        return <S.HeadGrayText key={index}>{value}</S.HeadGrayText>;
      })}
    </S.HeaderContainer>
  );
};

export default ListHeader;