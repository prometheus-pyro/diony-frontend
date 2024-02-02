import Image from "next/image";
import React from "react";

type Props = {
  videoSource?: string;
  audioSource?: string;
  prompt?: string;
  name?: string;
};

const HistoryElement = ({name, audioSource, prompt, videoSource}: Props) => {

  const handleLoad = () => {
    // console.log("loaded");
  }

  return (
    <div className="flex space-x-3">
      <Image
        src="/next.svg"
        alt="next.js logo"
        width={50}
        height={100}
        className="object-contain"
      />
      <div className="flex flex-col">
        <div className=""> {">"} {name}</div>
      </div>
      <button onClick={handleLoad}>
        프롬프트 불러오기
      </button>
    </div>
  );
};

export default HistoryElement;
