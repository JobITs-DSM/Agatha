import { FC } from "react";
import * as S from "../Styles/elementStyles";
import { color } from "../../../../../styles";

export const ListBody: FC = ():JSX.Element => {
    return (
        <S.Container>
            <S.Status color={color.red100}>접수 요청</S.Status>
            <S.EnterpriseName>세크라멘토 킹즈</S.EnterpriseName>
            <S.RecruitionField>웹 프론트엔드</S.RecruitionField>
            <S.grayText>참여기업</S.grayText>
            <S.Recruits>1명</S.Recruits>
            <S.Applicant>2명</S.Applicant>
            <S.grayText>2020년 10월 20일</S.grayText>
            <S.grayText>2020년 10월 20일</S.grayText>
        </S.Container>
    )
}

export const ListHeader: FC = (): JSX.Element => {
    return (
        <S.Container>
            <S.HeadText>상태</S.HeadText>
            <S.HeadText>기업명</S.HeadText>
            <S.HeadText>채용직군</S.HeadText>
            <S.HeadText>구분</S.HeadText>
            <S.HeadText>모집인원</S.HeadText>
            <S.HeadText>지원자</S.HeadText>
            <S.HeadText>모집 시작일</S.HeadText>
            <S.HeadText>모집 종료일</S.HeadText>
        </S.Container>
    )
}