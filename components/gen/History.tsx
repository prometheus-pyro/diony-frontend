import React from "react";
import HistoryElement from "./HistoryElement";
import "@/styles/scrollbar.scss";

type Props = {};

const History = ({}: Props) => {
  return (
    <div className="flex flex-col h-36 justify-center p-5 bg-[#5F5F5F] bg-opacity-30 rounded-lg overflow-y-scroll scroll">
      <HistoryElement />
      <HistoryElement />
      <HistoryElement />
      <HistoryElement />
      <HistoryElement />
    </div>
  );
};

export default History;
