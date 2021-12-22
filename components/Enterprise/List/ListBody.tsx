import { FC, useEffect, useRef } from "react";
import * as S from "./styles";
import { color } from "../../../styles";
import { EnterpriseModal, EnterpriseCheckBox } from "../../../states/atoms/Enterprise/index";
import { useSetRecoilState, useRecoilValue } from "recoil";

const ListBody: FC = (): JSX.Element => {
  const setIsModal = useSetRecoilState(EnterpriseModal);
  const checkBoxRef = useRef<HTMLInputElement>();
  const checkBoxState = useRecoilValue(EnterpriseCheckBox);

  const openModal = () => {
    setIsModal(true);
  };


  useEffect(() => {
    checkBoxState
      ? (checkBoxRef.current.checked = true)
      : (checkBoxRef.current.checked = false);
  }, [checkBoxState]);

  return (
    <S.BodyContainer>
      <S.Checkbox>
        <input type="checkbox" ref={checkBoxRef}/>
      </S.Checkbox>
      <S.WhiteText>세트라멘토 킹즈</S.WhiteText>
      <S.GrayText>대전</S.GrayText>
      <S.WhiteText>웹서비스</S.WhiteText>
      <S.GrayText>100~200명</S.GrayText>
      <S.LightGrayText>3억</S.LightGrayText>
      <S.ColoredText color={color.blue200}>참여기업</S.ColoredText>
      <S.LightGrayText>Y</S.LightGrayText>
      <S.LightGrayText>N</S.LightGrayText>
      <S.GrayText>2020년</S.GrayText>
      <S.GrayText>5명</S.GrayText>
      <S.WhiteUnderlined onClick={openModal}>5건</S.WhiteUnderlined>
    </S.BodyContainer>
  );
};

export default ListBody;
