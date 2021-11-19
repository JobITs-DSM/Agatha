import { FC } from "react";
import styled from "@emotion/styled";

const ContainerStyle = styled.div`
  width: 1200px;
  background-color: inherit;
`;

const Container: FC = ({ children }): JSX.Element => {
  return (
    <>
      <ContainerStyle>{children}</ContainerStyle>
    </>
  );
};

export default Container;
