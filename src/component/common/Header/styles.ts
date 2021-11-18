import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const Container = styled.div`
  background-color: ${color.gray700};
  height: 150px;
  width: 100%;
  min-width: 1280px;
  border-bottom: 1px solid ${color.gray400};
  color: ${color.gray100};
  display: flex;
`;

export const SelectorBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const SearchBox = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const Header = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 20px 0 20px 65px;
`;
