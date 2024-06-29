import { FC } from "react";

type GreetProps = {
  name?: string;
};

const Greet: FC<GreetProps> = ({ name }) => {
  return <div>Hello {name}</div>;
};

export default Greet;
