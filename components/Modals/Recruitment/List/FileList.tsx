import { FC } from "react";
import * as S from "../styles";

interface Props {
  number: number;
  file: string;
}

const FileList: FC<Props> = ({ number, file }): JSX.Element => {
  return (
    <S.FileList>
      <div className="number">{number}</div>
      <div className="file">{file}</div>
    </S.FileList>
  );
};

export default FileList;
