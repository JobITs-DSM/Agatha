import styled from "@emotion/styled";
import { color } from "../../../styles";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 11% 7% 11% 10% 8% 9% 7% 7% 9% 8% 8%;
  height: 55px;
  place-items: center;
  &:nth-child(1) {
    border: 1px solid ${color.gray400};
    background-color: ${color.gray600};
  }
`;

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 11% 7% 11% 10% 8% 9% 7% 7% 9% 8% 8%;
  height: 55px;
  place-items: center;
  &:nth-child(odd) {
    background-color: ${color.gray800};
  }
`;

export const HeadText = styled.div`
  font-size: 20px;
  color: ${color.gray200};
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

export const WhiteText = styled.div`
  color: ${color.gray100};
`;

export const GrayText = styled.div`
  color: ${color.gray300};
`;

export const LightGrayText = styled.div`
  color: ${color.gray200};
`;

export const WhiteUnderlined = styled.div`
  text-decoration: underline;
  color: ${color.gray100};
  cursor: pointer;
`;

export const ColoredText = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
