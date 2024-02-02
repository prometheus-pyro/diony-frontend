import React from "react";

type Props = {
  prompt?: string;
};

const Chip = ({ prompt }: Props) => {
  return <div className="">{prompt}</div>;
};

export default Chip;
