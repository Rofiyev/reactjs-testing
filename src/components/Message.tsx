import { FC } from "react";

type MassageProps = {
  value: string;
};

const Message: FC<MassageProps> = ({ value }) => {
  return <textarea defaultValue={value} rows={3} cols={6} />;
};

export default Message;

