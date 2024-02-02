import React from "react";

type Props = {
  imgSrc: string;
  musicSrc?: string;
  videoSrc: string;
  promptList?: string[];
  setPromptList?: any;
  setMusicSrc?: any;
  setVideoSrc?: any;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Portfolio = ({
  imgSrc,
  videoSrc,
  children,
  className,
  musicSrc,
  promptList,
  setMusicSrc,
  setPromptList,
  setVideoSrc,
  style,
  title,
}: Props) => {
  return <div className={`${className} h-64 w-64 bg-black rounded-lg`}></div>;
};

export default Portfolio;
