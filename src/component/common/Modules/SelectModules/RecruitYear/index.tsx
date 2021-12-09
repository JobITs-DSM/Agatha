import { FC } from "react";
import * as M from "../styles";

const RecruitYear: FC = (): JSX.Element => {
  const date = new Date();
  const SchoolStart = 2015;
  const CurrentDate = date.getFullYear();
  const YearArr = [];

  for (let i = CurrentDate; i >= SchoolStart; i--) {
    YearArr.push(i);
  }

  return (
    <M.Box>
      <M.FilterName>모집년도</M.FilterName>
      <M.Selection>
        {YearArr.map((v) => {
          return <M.Option key={v}>{v}</M.Option>;
        })}
      </M.Selection>
    </M.Box>
  );
};

export default RecruitYear;
