import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  place-items: center;
  justify-items: flex-start;
`;

export const FilterName = styled.label`
  font-size: 20px;
  color: ${color.gray200};
`;

export const Selection = styled.select<{ width: string }>`
  background-color: ${color.gray600};
  color: ${color.gray100};
  border: 1px solid ${color.gray400};
  outline: none;
  width: ${props => props.width};
  height: 30px;
  font-size: 17px;
  padding: 5px;
`;

