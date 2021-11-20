import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Box = styled.div`
  overflow: auto;
  height: 400px;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 15% 15% 30% 30%;
  height: 55px;
  place-items: center;
  border: 1px solid ${color.gray400};
  background-color: ${color.gray600};
  font-size: 20px;
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 15% 15% 30% 30%;
  height: 55px;
  place-items: center;
  font-size: 18px;
  &:nth-child(odd) {
    background-color: ${color.gray800};
  }
`;

export const HeadGrayText = styled.div`
  font-size: 20px;
  color: ${color.gray200};
`;

export const WhiteText = styled.div`
  color: ${color.gray100};  
`;

export const GrayText = styled.div`
  color: ${color.gray300};
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Checkbox = styled.label`
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;