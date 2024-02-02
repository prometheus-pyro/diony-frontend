import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
  setVisible?: any;
};

const PopUp = ({ children, className, style, setVisible, visible }: Props) => {
  return (
    <>
      {visible && (
        <>
          <button
            onClick={() => setVisible(false)}
            style={style}
            className="aboslute z-10 w-full absolute bg-black opacity-30"
          ></button>
          <div
            className={`flex flex-col gap-8 justify-center items-center w-96 h-72 bg-white drop-shadow-lg rounded-lg absolute left-1/2 top-3/4 z-20 -translate-y-1/2 -translate-x-1/2 ${className}`}
          >
            <div className="w-full text-center">
              음악을 익스포트 하시겠습니까?
            </div>
            <div className="text-xl text-center w-[80%] px-6 py-2 rounded-lg text-white bg-gray-400">
              <button onClick={() => setVisible(false)}>동영상과 음원 합치기</button>
            </div>
            <div className="text-xl text-center w-[80%] px-6 py-2 rounded-lg text-white bg-gray-400">
              <button>음원 only</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopUp;
