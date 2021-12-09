import styled from "@emotion/styled";
import Link from "next/link";
import { color } from "../../../styles";

export const SideBarContainer = styled.div`
  min-height: 100vh;
  background-color: ${color.gray500};
  min-width: 256px;
  color: ${color.gray100};
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
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
  gap: 10px;
`;

export const MenuTabText = styled.div`
  font-size: 15px;
  color: ${color.gray300};
`;

export const MenuLinks = styled(Link)`
  outline: none;
  text-decoration: none;
  font-size: 17px;
  cursor: pointer;
`;

export const Links = styled.a<{ background: string }>`
  outline: none;
  text-decoration: none;
  font-size: 17px;
  width: 100%;
  padding: 8px 6px;
  border-radius: 5px;
  background-color: ${(props) => props.background};
  cursor: pointer;
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
  text-decoration: underline;
`;

export const ExplanationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
