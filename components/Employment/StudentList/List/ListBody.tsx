import { FC, useEffect, useRef } from "react";
import * as S from "../styles";
import { EmploymentChecked } from "../../../../states/atoms/Employment";
import { useRecoilState } from "recoil";

const ListBody: FC = (): JSX.Element => {
  const checkBoxRef = useRef<HTMLInputElement>();
  const [checkBoxState, setCheckBoxState] = useRecoilState(EmploymentChecked);

  useEffect(() => {
    return () => {
      setCheckBoxState(false);
    };
  }, []);
  
  useEffect(() => {
    checkBoxRef.current.checked = checkBoxState;
  }, [checkBoxState]);

  return (
    <S.BodyContainer>
      <S.Checkbox>
        <input type="checkbox" ref={checkBoxRef} />
      </S.Checkbox>
      <S.WhiteText>2119</S.WhiteText>
      <S.WhiteText>조준서</S.WhiteText>
      <S.GrayText>2020년 10월 10일</S.GrayText>
      <S.GrayText>2020년 10월 10일</S.GrayText>
    </S.BodyContainer>
  );
};

export default ListBody;
