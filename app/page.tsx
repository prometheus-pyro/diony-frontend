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
import PopUp from "@/components/v2/PopUp";

const promptList = ["A", "B", "C"];

export default function Home() {
  const vh = useVh();
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const [time, setTime] = useState(0);
  const [videoSource, setVideoSource] = useState("");
  const [musicSource, setMusicSource] = useState("");
  const [promptList, setPromptList] = useState<string[]>([]);
  // const [title, setTitle] = useState<string>("ㅎㅇ");
  const [export_, setExport] = useState(false);

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
    <Background
      style={{ height: `${vh * 150}px` }}
      className="justify-start items-center"
    >
      <Background.Header className="w-full items-center justify-evenly bg-black text-white" />
      <PopUp
        style={{ height: `${vh * 1500}px` }}
        className="w-full h-full"
        visible={export_}
        setVisible={setExport}
      />
      <Background.Content className="bg-gradient-to-b to-[#120116] from-[#661d74] p-6 flex flex-col justify-center items-center w-full h-full gap-4">
        <div
          className={`${
            files?.length ? "w-fit" : "w-[80%]"
          } flex gap-4 h-[80%]`}
        >
          <Container className="w-full h-full  bg-gray-700 text-white">
            <VideoIO
              className="w-full h-full"
              files={files}
              setFiles={setFiles}
              ref={videoRef}
              setTime={setTime}
              videoSource={videoSource}
              handleLoadedMetadata={handleLoadedMetadata}
            />
          </Container>
          <div className="flex flex-col gap-4 w-full">
            <Container className="w-[80%] h-full bg-black bg-opacity-30">
              <Prompt className="" promptList={promptList} />
            </Container>
            <Container className="w-[80%] h-full">
              <History className="w-full h-full rounded-lg p-6" ref={videoRef}>
                <History.HistoryElement
                  className="flex gap-4 items-center"
                  title={"Ball chasing"}
                  imgSrc={"/1.png"}
                  videoSrc={videoSource}
                  setVideoSrc={setVideoSource}
                  musicSrc={musicSource}
                  setMusicSrc={setMusicSource}
                  promptList={promptList}
                  setPromptList={setPromptList}
                />
                <History.HistoryElement
                  className="flex gap-4 items-center"
                  title={"Thrilling Game"}
                  imgSrc={"/2.png"}
                  videoSrc={videoSource}
                  setVideoSrc={setVideoSource}
                  musicSrc={musicSource}
                  setMusicSrc={setMusicSource}
                  promptList={promptList}
                  setPromptList={setPromptList}
                />
                <History.HistoryElement
                  className="flex gap-4 items-center"
                  title={"Happy Vacation"}
                  imgSrc={"/3.png"}
                  videoSrc={videoSource}
                  setVideoSrc={setVideoSource}
                  musicSrc={musicSource}
                  setMusicSrc={setMusicSource}
                  promptList={promptList}
                  setPromptList={setPromptList}
                />
                <History.HistoryElement
                  className="flex gap-4 items-center"
                  title={"Deep Ocean"}
                  imgSrc={"/4.png"}
                  videoSrc={videoSource}
                  setVideoSrc={setVideoSource}
                  musicSrc={musicSource}
                  setMusicSrc={setMusicSource}
                  promptList={promptList}
                  setPromptList={setPromptList}
                />
              </History>
            </Container>
          </div>
        </div>
        <Container className="w-[80%] flex flex-col gap-4">
          <input
            type="range"
            value={time}
            onChange={handleSliderChange}
            min="0"
            max={(videoRef.current as any)?.duration || 100}
            step="1"
            className="w-full h-auto"
          />
          <div className="w-full h-16 bg-gray-300"></div>
          <div className="w-full h-16 bg-gray-300"></div>
          <div className="w-full h-16 bg-gray-300"></div>
          <AudioPopUp />
        </Container>
        {/* <MusicTrack /> */}
        <Container className="flex justify-center w-[80%] h-12">
          <button
            onClick={() => {
              setExport(!export_);
            }}
            className="w-64 h-12 rounded-lg text-white bg-purple-700"
          >
            Export
          </button>
        </Container>
      </Background.Content>
    </Background>
  );
}
