import { FC } from "react";
import * as S from "./styles";
import { color } from "../../../styles";

export const ListHeader: FC = (): JSX.Element => {
  const HeadArr = [
    "기업명",
    "지역",
    "산업분야",
    "근로자수",
    "매출액",
    "기업구분",
    "협약",
    "개발컨텍",
    "최근의뢰",
    "취업학생",
    "후기",
  ];
  return (
    <S.HeaderContainer>
      <S.Checkbox>
        <input type="checkbox" />
      </S.Checkbox>
      {HeadArr.map((value, index) => {
        return <S.HeadText key={index}>{value}</S.HeadText>;
      })}
    </S.HeaderContainer>
  );
};

export default ListHeader;