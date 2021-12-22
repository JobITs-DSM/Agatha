import { FC, useRef } from "react";
import * as S from "./styles";
import { color } from "../../../styles";
import { EnterpriseCheckBox } from "../../../states/atoms/Enterprise";
import { useSetRecoilState } from "recoil";

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

export const ListHeader: FC = (): JSX.Element => {
  const checkBoxRef = useRef<HTMLInputElement | null>(null);
  const setCheckBox = useSetRecoilState(EnterpriseCheckBox);

  const changeCheckBox = () => {
    setCheckBox(checkBoxRef.current.checked);
  };

  return (
    <S.HeaderContainer>
      <S.Checkbox>
        <input type="checkbox" ref={checkBoxRef} onChange={changeCheckBox}/>
      </S.Checkbox> 
      {HeadArr.map((value, index) => {
        return <S.HeadText key={index}>{value}</S.HeadText>;
      })}
    </S.HeaderContainer>
  );    
};

export default ListHeader;