import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Search = styled.div`
  display: inherit;
  background-color: ${color.blue100};
  align-self: center;
  height: 30px;
  width: 75px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
