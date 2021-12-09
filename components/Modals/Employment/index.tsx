import { FC, useEffect } from "react";
import * as S from "./styles";
import * as M from "../../Common/Modules/SelectModules/styles";
import List from "./List";
import { EModal } from "../../../states/atoms/Employment";
import { useRecoilState } from "recoil";
import { dummyData3 } from "../../../exports/testData";

const EmploymentModal: FC = (): JSX.Element => {
  const listHeaderArr = ["실습년도", "구분", "작성자"];
  const [isModal, setIsModal] = useRecoilState(EModal);

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <S.Wrapper isModal={isModal} onClick={closeModal}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <div className="title">후기 등록 및 조회</div>
        {/* 리스트 박스 */}
        <S.ListBox>
          <S.ListHead>
            {listHeaderArr.map((value, index) => {
              return <div key={index}>{value}</div>;
            })}
          </S.ListHead>
          <S.ListBody>
            {dummyData3.map((value, index) => {
              return (
                <List
                  date={value.date}
                  type={value.type}
                  writer={value.writer}
                  key={index}
                />
              );
            })}
          </S.ListBody>
        </S.ListBox>
        {/* 리뷰 컨테이너 */}
        <S.ReviewContainer>
          <S.ReviewHeader>
            <div className="headerbox">
              <M.Box width="223px">
                <M.FilterName>구분</M.FilterName>
                <M.Selection width={"172px"}>
                  <option>전체</option>
                </M.Selection>
              </M.Box>
              <M.Box width="223px">
                <M.FilterName>작성자</M.FilterName>
                <input type="text" />
              </M.Box>
            </div>
            <S.SaveButton type="button" value="저장" />
          </S.ReviewHeader>
        </S.ReviewContainer>
      </S.ModalContainer>
    </S.Wrapper>
  );
};

export default EmploymentModal;
