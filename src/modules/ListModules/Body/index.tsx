import styled from "@emotion/styled";
import { FC } from "react";

const BodyStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 0 20px 60px;
  max-height: 600px;
  overflow: scroll;
`;

const Body: FC = ({ children }): JSX.Element => {
  return (
    <>
      <BodyStyle>{children}</BodyStyle>
    </>
  );
};

export default Body;
