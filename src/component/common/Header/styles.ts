import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const HeaderContainer = styled.div`
  background-color: ${color.gray700};
  height: 150px;
  width: 100%;
  border-bottom: 1px solid ${color.gray400};
  color: ${color.gray100};
  display: grid;
  grid-template-columns: 90% 10%;
`;

export const SelectorBox = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const SearchBox = styled.div`

`;