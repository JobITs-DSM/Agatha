import { FC } from "react";
import * as M from "../styles";
import styled from "@emotion/styled";
import { color } from "../../../../../styles";

const EnterpriseInputStyle = styled.input`
  outline: none;
  border: 1px solid ${color.gray400};
  background-color: ${color.gray600};
  color: ${color.gray100};
  width: 90%;
  height: 30px;
  padding: 5px 15px;
  font-size: 15px;
`;

const EnterpriseName: FC = (): JSX.Element => {
  return (
    <M.Box width="100%">
      <M.FilterName>회사명</M.FilterName>
      <EnterpriseInputStyle type="text" placeholder={"회사명을 입력해주세요"} />
    </M.Box>
  );
};

export default EnterpriseName;
