import React, { useState } from "react";
import PromptTag from "./PromptTag";

type Props = {
  promptList?: string[];
  className?: string;
};

const Prompt = ({ promptList, className }: Props) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState<string[]>(promptList || []);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTags((x) => [...x, text]);
      setText("");
    }
  };

  const handleGenerate = () => {
    setTags([]);
  };

  return (
    <div className="w-full h-full flex flex-col space-y-4 text-white p-6">
      {tags?.map((prompt: string, index: number) => (
        <PromptTag key={index} prompt={prompt} />
      ))}
      <input
        type="text"
        className="w-full text-center break-keep bg-white bg-opacity-80 resize-none rounded-lg text-lg p-2"
        onKeyDown={handleKeyDown}
        value={text}
        onChange={handleTextChange}
        placeholder="6명이 농구하고 있다"
      />
      <div className="text-center break-keep text-white">
        텍스트를 수정하거나 원하는 상황, 느낌 등을 구체적으로 알려주시면 동영상에 더 어울리는 음악을 찾을 수 있어요. 
      </div>
      <button className="bg-[#8840af] w-fit p-3 rounded-lg ml-auto" onClick={handleGenerate}>생성하기</button>
    </div>
  );
};

export default Prompt;
