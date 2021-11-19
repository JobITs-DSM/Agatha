import { FC } from "react";
import styled from "@emotion/styled";

const ListContainerStyle = styled.div`
  width: 100%;
  background-color: inherit;
`;

const ListContainer: FC = ({ children }): JSX.Element => {
  return (
    <>
      <ListContainerStyle>{children}</ListContainerStyle>
    </>
  );
};

export default ListContainer;
