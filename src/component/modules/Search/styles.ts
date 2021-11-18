import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const SearchBox = styled.div`
  display: flex;
  width: 70px;
  justify-content: center;
`;

export const Search = styled.div`
  display: inherit;
  background-color: ${color.blue100};
  align-self: flex-end;
  height: 35px;
  width: 75px;
  justify-content: center;
  align-items: center;
`;
