import React from "react";
// import WaveSurfer from 'wavesurfer.js'

type Props = {};

const AudioPopUp = ({}: Props) => {

  const handleInsert = () => {
    // console.log("inserted");
  }
  

  return <div className="rounded-lg flex justify-evenly p-4 items-center w-full bg-[#a525b1]">
    <input type="text" className="flex rounded-lg text-center resize-none h-full w-[80%] " placeholder="넣고 싶은 효과음을 작성해주세요"/>
    <button className="text-white bg-[#56137a] p-4 rounded-lg w-[10%]" onClick={handleInsert}>
      삽입
    </button>
  </div>;
};

export default AudioPopUp;
