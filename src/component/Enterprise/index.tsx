import { FC } from "react";
import { Container, SelectStatus, Head, Body } from "../../modules/ListModules";

const Enterprise: FC = (): JSX.Element => {
  const StatusArr = ["선도기업 등록", "참여기업 등록", "협약 등록"];

  return (
    <Container>
      <Head>
        {StatusArr.map((value, index) => {
          return <SelectStatus key={index}>{value}</SelectStatus>;
        })}
      </Head>
      <Body>
          
      </Body>
    </Container>
  );
};

export default Enterprise;
