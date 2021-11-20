import styled from "@emotion/styled"
import { color } from "../../../styles";

export const Container = styled.div`
    width: 1200px;
    height: 100%;
    display: grid;
    grid-template-columns: 40% 15% 45%;
`;

export const ChangeDate = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.blue100};
    color: ${color.gray100};
    margin: 6px 0;
    margin-top: 5px;
    cursor: pointer;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;