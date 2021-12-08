import { FC } from "react";
import * as S from "./styles";
const RecruitModal : FC= ():JSX.Element => {
    return (
        <S.Wrapper>
            <S.ModalContainer>
                <div className="title">지원자 목록 조회</div>
                <S.ListBox>
                    <S.ListHead>
                        <div>학번</div>
                        <div>이름</div>
                        <div>지원일자</div>
                    </S.ListHead>
                </S.ListBox>
            </S.ModalContainer>
        </S.Wrapper>
    );
}

export default RecruitModal;