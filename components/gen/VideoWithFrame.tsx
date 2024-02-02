import React, { useState, useRef, useEffect } from "react";
import "@/styles/globals.scss";
import "@/styles/slider.scss";

type Props = {
  videoSource?: string;
  audioSource?: string;
};

const VideoPlayer = ({ videoSource, audioSource }: Props) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [value, setValue] = useState(0);

  const handleLoadedMetadata = () => {
    setValue(0);
  };

  const handleSliderChange = (e: any) => {
    const time = e.target.value;
    setValue(time);
    if (videoRef?.current) {
      (videoRef?.current as any).currentTime = time;
    }
    if (audioRef.current) {
      (audioRef.current as any).currentTime = time;
    }
  };

  useEffect(() => {
    const video = videoRef?.current as any;
    const audio = audioRef?.current as any;

    const updateValue = (element: any) => {
      setValue(element.currentTime);
    };

    if (video) {
      video.addEventListener("timeupdate", () => updateValue(video));
    }
    if (audio) {
      audio.addEventListener("timeupdate", () => updateValue(audio));
    }

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", () => updateValue(video));
      }
      if (audio) {
        audio.removeEventListener("timeupdate", () => updateValue(audio));
      }
    };
  }, [videoRef, audioRef]); 

  return (
    <div className="flex flex-col items w-full h-full space-y-4">
      {videoSource && (
        <div className=" w-full p-6">
          <video
            ref={videoRef}
            src={videoSource}
            onLoadedMetadata={handleLoadedMetadata}
            controls
          />
        </div>
      )}
      {audioSource && (
        <audio
          ref={audioRef}
          src={audioSource}
          onLoadedMetadata={handleLoadedMetadata}
          controls
        />
      )}
      <input
        type="range"
        value={value}
        onChange={handleSliderChange}
        min="0"
        max={(videoRef.current as any)?.duration || 100}
        step="1"
        className="w-full h-auto slider"
      />
      <input
        type="range"
        value={value}
        onChange={handleSliderChange}
        min="0"
        max={(videoRef.current as any)?.duration || 100}
        step="1"
        className="w-full h-auto slider"
      />
    </div>
  );
};

export default VideoPlayer;
