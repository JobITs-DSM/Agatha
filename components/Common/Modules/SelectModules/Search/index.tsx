import { FC } from "react";
import styled from "@emotion/styled";
import { color } from "../../../../../styles";

const SearchBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchStyle = styled.div`
  display: inherit;
  background-color: ${color.blue100};
  align-self: center;
  height: 30px;
  width: 75px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Search: FC = (): JSX.Element => {
  return (
    <SearchBoxStyle>
      <SearchStyle>검색</SearchStyle>
    </SearchBoxStyle>
  );
};

export default Search;
