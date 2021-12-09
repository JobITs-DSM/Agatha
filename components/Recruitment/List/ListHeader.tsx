import { FC, useRef, useEffect } from "react";
import * as S from "./styles";
import { color } from "../../../styles";
import { RCheckBox } from "../../../states/atoms/Recruitment";
import { useSetRecoilState } from "recoil";

const ListHeader: FC = (): JSX.Element => {
  const checkBoxRef = useRef<HTMLInputElement | null>(null);
  const setCheckBox = useSetRecoilState(RCheckBox);

  const changeCheckBox = () => {
    setCheckBox(checkBoxRef.current.checked);
  };

  const HeadArr = [
    "상태",
    "기업명",
    "채용직군",
    "구분",
    "모집인원",
    "지원자",
    "모집 시작일",
    "모집 종료일",
  ];
  return (
    <S.HeaderContainer>
      <S.Checkbox>
        <input type="checkbox" ref={checkBoxRef} onChange={changeCheckBox} />
      </S.Checkbox>
      {HeadArr.map((value, index) => {
        return <S.HeadText key={index}>{value}</S.HeadText>;
      })}
    </S.HeaderContainer>
  );
};

export default ListHeader;
