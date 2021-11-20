import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const FilterName = styled.label`
  font-size: 17px;
  color: ${color.gray200};
`;

export const Selection = styled.select`
  background-color: ${color.gray600};
  color: ${color.gray100};
  border: 1px solid ${color.gray400};
  outline: none;
  height: 30px;
  font-size: 17px;
  padding: 5px;
`;

export const ChangeDate = styled.input`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.blue100};
    color: ${color.gray100};
    margin: 6px 0;
    margin-top: 15px;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    border: none;
`;
