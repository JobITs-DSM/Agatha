import { FC } from "react";
import styled from "@emotion/styled";
import { color } from "../../../../styles";

export const StatusStyle = styled.div`
  padding: 8px 20px;
  background-color: ${color.blue100};
`;

const Status: FC = ({ children }): JSX.Element => {
  return (
    <>
      <StatusStyle>{children}</StatusStyle>
    </>
  );
};

export default Status;
