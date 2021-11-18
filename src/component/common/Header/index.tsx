import { FC } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";
import * as Module from "../../select_modules";

const Header: FC = (): JSX.Element => {
  const router = useRouter();
  return (
    <S.Container>
      <S.Header>
        <S.SelectorBox>
          {
            {
              "/recruitment": (
                <>
                  <Module.RecruitYear />
                  <Module.EnterpriceName />
                  <Module.ClassifyRecruit />
                  <Module.RequestTime />
                </>
              ),
              "/enterprise": (
                <>
                  <Module.RecruitYear />
                  <Module.EnterpriceName />
                  <Module.Region />
                  <Module.BuisinessField />
                </>
              ),
              "/employment": (
                <>
                  <Module.RecruitYear />
                  <Module.EnterpriceName />
                  <Module.Sortation />
                </>
              ),
            }[router.pathname]
          }
        </S.SelectorBox>
        <S.SearchBox>
          <span />
          <Module.Search />
        </S.SearchBox>
      </S.Header>
    </S.Container>
  );
};

export default Header;
