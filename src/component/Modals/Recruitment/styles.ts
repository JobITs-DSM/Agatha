import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    background-color: rgb(28, 28, 30, 0.5);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    /* display: none; */
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
    /* height: 56px; */
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

export const List = styled.div`
    background-color: inherit;
    border-bottom: 1px solid ${color.gray400};
    height: 56px;
    display: grid;
    grid-template-columns: 32% 32% 36%;
    padding: 14px 35px;
    align-items: center;

    & .number {
        color: ${color.gray300};
    }

    & .name {
        color: ${color.gray100};
    }

    & .date {
        color: ${color.gray200};
    }
`;
