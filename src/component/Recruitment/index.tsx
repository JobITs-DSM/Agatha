import { FC } from "react";
import { Container, SelectStatus, Head, Body } from "../../modules/ListModules";
import { ListHeader, ListBody } from "../../modules/ListModules/List";

const Recruitment: FC = (): JSX.Element => {
  const StatusArr = ["접수", "모집전", "모집중"];

  return (
    <Container>
      <Head>
        {StatusArr.map((value, index) => {
          return <SelectStatus key={index}>{value}</SelectStatus>;
        })}
      </Head>
      <Body>
        <ListHeader />
        <ListBody />
        <ListBody />
        <ListBody />
        <ListBody />
        <ListBody />
        <ListBody />
      </Body>
    </Container>
  );
};

export default Recruitment;
