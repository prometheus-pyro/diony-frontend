import Background from "@/components/basic/Background";
import Portfolio from "@/components/v2/Portfolio";
import React from "react";

type Props = {};

function community({}: Props) {
  return (
    <Background className="gap-8">
      <Background.Header className="w-full items-center justify-evenly bg-black text-white" />
      <Background.Content className="flex w-full justify-center items-center">
        <div className="grid grid-cols-4 w-fit gap-8">
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
          <Portfolio imgSrc="" videoSrc="" />
        </div>
      </Background.Content>
    </Background>
  );
}

export default community;
