import React, { useState } from "react";
import Tag from "./Tag";

type Props = {};

const Prompt = ({}: Props) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState<string[]>([]);

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
    <div className="flex flex-col justify-center">
      <div className="flex flex-col h-16 overflow-y-scroll">
        {tags.map((tag, id) => (
          <Tag key={id} text={tag} />
        ))}
      </div>
      <textarea
        className="bg-gray-300 resize-none rounded-lg text-sm p-2"
        placeholder="원하는 상황, 느낌 등을 추가해도 돼요"
        onKeyDown={handleKeyDown}
        value={text}
        onChange={handleTextChange}
      />
      <button className="bg-gradient-to-b drop-shadow-lg rounded-lg w-[50%] p-2 from-[#D888DF] to-[#E630F5]" onClick={handleGenerate}>GENERATE</button>
    </div>
  );
};

export default Prompt;
