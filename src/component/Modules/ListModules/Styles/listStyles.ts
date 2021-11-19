import styled from "@emotion/styled";
import { color } from "../../../../../styles";

export const ContainerStyle = styled.div`
width: 1200px;
background-color: inherit;
`;

export const BodyStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 0 20px 60px;
`;

export const HeadStyle = styled.div`
height: 70px;
width: 1200px;
display: flex;
align-items: center;
justify-content: right;
gap: 15px;
color: ${color.gray100};
`;

export const StatusStyle = styled.div`
  padding: 8px 20px;
  background-color: ${color.blue100};
  cursor: pointer;
`;
