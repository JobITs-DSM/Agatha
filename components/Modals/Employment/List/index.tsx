import { FC } from "react";
import * as S from "../styles";

interface Props {
  date: string;
  type: string;
  writer: string;
}

const List: FC<Props> = ({ date, type, writer }): JSX.Element => {
  return (
    <S.StudentList>
      <div className="date">{date}</div>
      <div className="type">{type}</div>
      <div className="writer">{writer}</div>
    </S.StudentList>
  );
};

export default List;
