import { FC } from "react";

interface Props {
  id: string;
  onChange(any): void;
}

const FileInput: FC<Props> = ({ id, onChange }) => {
  return (
    <input
      type="file"
      id={id}
      onChange={onChange}
      style={{ display: "none" }}
    />
  );
};

export default FileInput;