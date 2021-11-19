import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-columns: 5% 8% 15% 12% 10% 10% 10% 15% 15%;
  height: 55px;
  place-items: center;
  &:nth-child(odd) {
    background-color: ${color.gray800};
  }
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-columns: 5% 8% 15% 12% 10% 10% 10% 15% 15%;
  height: 55px;
  place-items: center;
  &:nth-child(1) {
    border: 1px solid ${color.gray400};
    background-color: ${color.gray600};
  }
`;

export const HeadText = styled.div`
  font-size: 20px;
  color: ${color.gray200};
`;

export const Status = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;

export const EnterpriseName = styled.div`
  color: ${color.gray100};
  text-decoration: underline;
  cursor: pointer;
`;

export const RecruitionField = styled.div`
  color: ${color.gray100};
`;

export const Recruits = styled.div`
  color: ${color.gray200};
`;

export const grayText = styled.div`
  color: ${color.gray300};
`;

export const Applicant = styled.div`
  color: ${color.gray200};
  text-decoration: underline;
  cursor: pointer;
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
