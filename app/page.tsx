"use client";
import Background from "@/components/basic/Background";
import DragDropFiles from "@/components/gen/DragDropFile";
import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player";

export default function Home() {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  // const [isUpload, setIsUpload] = useState<boolean>(false);
  // const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<IFileTypes[]>([]);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  return (
    <Background>
      <Background.SideNav />
      <Background.Content>
        <h2>Automated Soundtrack Generation Platform</h2>
        {isWindow && <DragDropFiles files={files} setFiles={setFiles} />}
      </Background.Content>
    </Background>
  );
}
