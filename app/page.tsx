"use client";
import Background from "@/components/basic/Background";
import React, { use, useCallback, useEffect, useRef, useState } from "react";
import "@/styles/globals.scss";
import { useVh } from "@/hooks/useVh";
import VideoIO from "@/components/v2/VideoIO";
import Container from "@/components/v2/Container";
import Prompt from "@/components/v2/Prompt";
import History from "@/components/v2/History";
import AudioPopUp from "@/components/v2/AudioPopUp";
import MusicTrack from "@/components/v2/MusicTrack";

const promptList = ["A", "B", "C"]

export default function Home() {
  const vh = useVh();
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const [time, setTime] = useState(0);

  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    setTime(0);
  };

  const handleSliderChange = (e: any) => {
    const time = e.target.value;
    setTime(time);
    if (videoRef?.current) {
      (videoRef?.current as any).currentTime = time;
    }
  };

  return (
    <Background style={{ height: `${vh * 120}px` }}>
      <Background.Header />
      <Background.Content>
        <Container>
          <VideoIO
            files={files}
            setFiles={setFiles}
            ref={videoRef}
            setTime={setTime}
            // videoSource="/video.mp4"
            handleLoadedMetadata={handleLoadedMetadata}
          />
        </Container>

        <Container>
          <Prompt promptList={promptList} />
        </Container>

        <Container>
          <History ref={videoRef} />
        </Container>

        <Container>
          <input
            type="range"
            value={time}
            onChange={handleSliderChange}
            min="0"
            max={(videoRef.current as any)?.duration || 100}
            step="1"
            className="w-full h-auto"
          />
        </Container>

        <AudioPopUp />
        {/* <MusicTrack /> */}
      </Background.Content>
    </Background>
  );
}
