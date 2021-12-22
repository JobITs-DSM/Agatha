import { FC, useRef, useEffect } from "react";
import * as S from "./styles";
import { color } from "../../../styles";
import { RecruitmentModal, RecruitmentCheckBox } from "../../../states/atoms/Recruitment";
import { useSetRecoilState, useRecoilValue } from "recoil";

const ListBody: FC = (): JSX.Element => {
  const setIsModal = useSetRecoilState(RecruitmentModal);
  const checkBoxRef = useRef<HTMLInputElement>();
  const checkBoxState = useRecoilValue(RecruitmentCheckBox);

  useEffect(() => {
    checkBoxState
      ? (checkBoxRef.current.checked = true)
      : (checkBoxRef.current.checked = false);
  }, [checkBoxState]);

  const openModal = () => {
    setIsModal(true);
  };

  return (
    <S.BodyContainer>
      <S.Checkbox>
        <input type="checkbox" ref={checkBoxRef} />
      </S.Checkbox>
      <S.ColoredText color={color.red100}>접수 요청</S.ColoredText>
      <S.WhiteUnderlinedText onClick={openModal}>
        세크라멘토 킹즈
      </S.WhiteUnderlinedText>
      <S.WhiteText>웹 프론트엔드</S.WhiteText>
      <S.GrayText>참여기업</S.GrayText>
      <S.LighterGray>1명</S.LighterGray>
      <S.GreyUnderlinedText>2명</S.GreyUnderlinedText>
      <S.GrayText>2020년 10월 20일</S.GrayText>
      <S.GrayText>2020년 10월 20일</S.GrayText>
    </S.BodyContainer>
  );
};

export default ListBody;
