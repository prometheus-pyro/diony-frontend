import Image from "next/image";
import { forwardRef } from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

interface HistoryChildProps extends Props {
  title?: string;
  promptList?: string[];
  setPromptList?: any;
  imgSrc: string;
  musicSrc?: string;
  setMusicSrc?: any;
  videoSrc: string;
  setVideoSrc: any;

}

const ForwardRef = forwardRef<HTMLDivElement, Props>(
  ({ children, className, style }: Props, ref) => {
    return (
      <div style={style} className={`${className} bg-white bg-opacity-30`} ref={ref}>
        {children}
      </div>
    );
  }
);

ForwardRef.displayName = "ForwardRef";

const HistoryElement = ({
  className,
  children,
  imgSrc,
  musicSrc,
  setMusicSrc,
  videoSrc,
  setVideoSrc,
  promptList,
  setPromptList,
  style,
  title,
}: HistoryChildProps) => {

  const onClick = () => {
    setMusicSrc(musicSrc)
    setVideoSrc(videoSrc)
    setPromptList(promptList)
  }

  return (
    <div className={`w-full ${className} justify-end text-white`}>
      <div>{children}</div>
      <Image
        className="mr-auto"
        src={imgSrc}
        alt="HistoryImg"
        width={64}
        height={64}
      />
      <div className="mr-auto">
        {title}
      </div>
      <button className="bg-[#56137a] px-4 py-2 rounded-lg" onClick={onClick} >
        프롬프트 불러오기
      </button>
    </div>
  );
};

const HistoryCurrent = ({
  className,
  children,
  imgSrc,
  musicSrc,
  setMusicSrc,
  setVideoSrc,
  videoSrc,
  promptList,
  setPromptList,
  style,
  title,
}: HistoryChildProps) => {
  return (
    <div className={`${className}`}>
      <div>{children}</div>
    </div>
  );
};

const History = Object.assign(ForwardRef, {
  HistoryElement,
  HistoryCurrent,
});

export default History;
