import { FC } from "react";
import * as S from "../styles";

interface Props {
  number: number;
  name: string;
  date: string;
}

const List: FC<Props> = ({ number, name, date }): JSX.Element => {
  return (
    <S.List>
      <div className="number">{number}</div>
      <div className="name">{name}</div>
      <div className="date">{date}</div>
    </S.List>
  );
};

export default List;
