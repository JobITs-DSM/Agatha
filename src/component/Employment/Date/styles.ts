import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10px 0;
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