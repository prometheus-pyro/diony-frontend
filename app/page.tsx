"use client";
import Background from "@/components/basic/Background";
import DragDrop from "@/components/gen/DragDropFile";
import History from "@/components/gen/History";
import Prompt from "@/components/gen/Prompt";
import React, { useCallback, useEffect, useState } from "react";
import "@/styles/globals.scss";

export default function Home() {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  // const [isUpload, setIsUpload] = useState<boolean>(false);
  // const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<IFileTypes[]>([]);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  return (
    <Background className="w-screen h-screen bg-gradient-to-b from-[#2D083E] to-[#B535D5]">
      <Background.SideNav className="flex flex-col gap-4 p-6 text-white bg-opacity-30 bg-black" />
      <Background.Content className="mr-auto flex flex-col justify-center text-white">
        <h2>Automated Soundtrack Generation Platform</h2>
        {/* <FrameBar totalFrames={}/> */}
        <div className="flex w-full h-full space-x-4">
          <div>
            {isWindow && <DragDrop files={files} setFiles={setFiles} />}
          </div>
          <div className="flex flex-col ">
            <Prompt />
            <History />
          </div>
        </div>
      </Background.Content>
    </Background>
  );
}
