import React, { useState } from "react";
import PromptTag from "./PromptTag";

type Props = {
  promptList?: string[];
};

const Prompt = ({ promptList }: Props) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState<string[]>(promptList || []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      setTags((x) => [...x, text]);
      setText("");
    }
  };

  const handleGenerate = () => {
    setTags([]);
  };

  return (
    <div>
      {tags?.map((prompt: string, index: number) => (
        <PromptTag key={index} prompt={prompt} />
      ))}
      <textarea
        className="bg-gray-300 resize-none rounded-lg text-lg p-2"
        placeholder="원하는 상황, 느낌 등을 추가해도 돼요"
        onKeyDown={handleKeyDown}
        value={text}
        onChange={handleTextChange}
      />
      <button onClick={handleGenerate}></button>
    </div>
  );
};

export default Prompt;
