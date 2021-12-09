import styled from "@emotion/styled";
import { color } from "../../../../../styles";

export const Container = styled.div`
  width: 1200px;
  background-color: inherit;
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 650px;
  flex-direction: column;
  padding-left: 60px;
`;

export const Box = styled.div`
  height: 100%;
  overflow: auto;
`;

export const Selector = styled.div`
  height: 70px;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 15px;
  color: ${color.gray100};
`;

export const Status = styled.div`
  padding: 8px 20px;
  background-color: ${color.blue100};
  cursor: pointer;
`;
