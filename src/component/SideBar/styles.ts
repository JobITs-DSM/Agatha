import styled from "@emotion/styled";
import Link from "next/link";
import { color } from "../../../styles";

export const SideBarContainer = styled.div`
  height: 100vh;
  background-color: ${color.gray500};
  width: 256px;
  color: ${color.gray100};
  display: flex;
  flex-direction: column;
  padding: 3% 1%;
  position: relative;
`;

export const Introduction = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const DetailText = styled.div`
  color: ${color.gray300};
  font-size: 15px;
`;

export const NameText = styled.div`
  color: ${color.gray200};
  font-size: 20px;
`;

export const MenuTab = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15%;
  gap: 20px;
`;

export const MenuTabText = styled.div`
  font-size: 15px;
  color: ${color.gray300};
`;

export const MenuLinks = styled(Link)<{background}>`
  outline: none;
  text-decoration: none;
  font-size: 17px;
  background-color: ${props => props.background};
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  transform: translateY(-50%);
  bottom: 0;
`;

export const ByTeam = styled.div`
    display: flex;
    gap: 5px;
`;

export const Text = styled.div`
    font-size: 15px;
    color: ${color.gray300};
`;

export const Team = styled.div`
    font-size: 15px;
    color: ${color.gray200};
    border-bottom: 1px solid ${color.gray200};
`;

export const ExplanationBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Explanation = styled.div`

`