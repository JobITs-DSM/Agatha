import { FC, useEffect } from "react";
import * as S from "./styles";
import { StudentList, FileList } from "./List";
import FileInput from "../../Common/FileInput";
import { getFileData } from "../../../utils/function/getFile";
import { RecruitmentModal } from "../../../states/atoms/Recruitment";
import { useRecoilState } from "recoil";
import { dummyData1, dummyData2 } from "../../../exports/testData";

const RecruitModal: FC = (): JSX.Element => {
  const listHeaderArr = ["학번", "이름", "지원일자"];
  const [isModal, setIsModal] = useRecoilState(RecruitmentModal);

  const uploadFile = (event) => {
    getFileData(event).then((res) => {
      console.log(res);
    });
  };

  const closeModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    console.log(isModal);
  }, []);

  return (
    <S.Wrapper
      onClick={(e) => {
        e.preventDefault();
        closeModal();
      }}
      isModal={isModal}
    >
      <S.ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="title">지원자 목록 조회</div>
        <S.ListBox>
          <S.ListHead>
            {listHeaderArr.map((value, index) => {
              return <div key={index}>{value}</div>;
            })}
          </S.ListHead>
          <S.ListBody>
            {dummyData1.map((value, index) => {
              return (
                <StudentList
                  key={index}
                  number={value.number}
                  name={value.name}
                  date={value.date}
                />
              );
            })}
          </S.ListBody>
        </S.ListBox>
        <S.FileUploadWrapper>
          <S.FileUploadHeader>
            <div>
              <S.Alertion>* 학번_이름으로 파일을 올려주세요</S.Alertion>
              <span>예{")"} 2119_조준서</span>
            </div>
            <label htmlFor={"file"}>첨부파일 등록</label>
            <FileInput onChange={uploadFile} id={"file"} />
          </S.FileUploadHeader>
            <S.ListBox>
              <S.ListHead>
                <div>순번</div>
                <div>첨부파일</div>
              </S.ListHead>
              <S.ListBody>
                {dummyData2.map((value, index) => {
                  return (
                    <FileList
                      key={index}
                      number={index + 1}
                      file={value.file_name}
                    />
                  );
                })}
              </S.ListBody>
            </S.ListBox>
        </S.FileUploadWrapper>
      </S.ModalContainer>
    </S.Wrapper>
  );
};

export default RecruitModal;
