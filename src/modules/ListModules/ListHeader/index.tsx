import { FC } from "react";
import styled from "@emotion/styled";
import { color } from "../../../../styles/index";

const ListHeaderStyle = styled.div`
  height: 70px;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 15px;
  color: ${color.gray100};
`;

const ListHeader: FC = ({ children }): JSX.Element => {
  return (
    <>
      <ListHeaderStyle>{children}</ListHeaderStyle>
    </>
  );
};

export default ListHeader;
