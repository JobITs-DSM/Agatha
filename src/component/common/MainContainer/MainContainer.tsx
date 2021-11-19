import { FC } from "react";
import * as S from "./styles";

const MainContainer: FC = ({ children }): JSX.Element => {
  return (
    <>
      <S.Container>{children}</S.Container>
    </>
  );
};

export default MainContainer;
