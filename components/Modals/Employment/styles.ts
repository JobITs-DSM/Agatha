import styled from "@emotion/styled";
import { color } from "../../../styles";

export const Wrapper = styled.div<{ isModal: boolean }>`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgb(28, 28, 30, 0.5);
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.isModal ? "flex" : "none")};
`;

export const ModalContainer = styled.div`
  width: 725px;
  height: 565px;
  background-color: ${color.gray500};
  border-radius: 10px;
  padding: 30px 40px;
  color: ${color.gray100};

  & .title {
    font-size: 23px;
    margin-bottom: 30px;
  }
`;

export const ListContainer = styled.div`
  height: 420px;
  display: flex;
  flex-direction: column;
`;

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListHead = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 36%;
  padding: 14px 35px;
  background-color: ${color.gray600};
  border: 1px solid ${color.gray400};

  & div {
    color: ${color.gray200};
    font-size: 20px;
  }
`;

export const ListBody = styled.div`
  height: 112px;
  overflow: scroll;
`;

export const StudentList = styled.div`
  background-color: inherit;
  border-bottom: 1px solid ${color.gray400};
  height: 56px;
  display: grid;
  grid-template-columns: 32% 32% 36%;
  padding: 14px 35px;
  align-items: center;

  & .date {
    color: ${color.gray300};
  }

  & .type {
    color: ${color.gray100};
  }

  & .writer {
    color: ${color.gray200};
  }
`;

export const ReviewContainer = styled.div`
  margin-top: 37px;
`;

export const ReviewHeader = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-between;
   
  & .headerbox {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: 40px;
  }
`;

export const SaveButton = styled.input`
  border: 1px solid ${color.gray100};
  color: ${color.gray100};
  padding: 5px 19px;
  background-color: inherit;
  cursor: pointer;
`;
