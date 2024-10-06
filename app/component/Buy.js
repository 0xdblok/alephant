import React from "react";
import TextContent from "./buy/TextContent";
import VideoPlayer from "./buy/VideoPlayer";

export default function Buy() {
  return (
    <main className="flex flex-col justify-center items-center px-16  bg-white max-md:px-5">
      <div className="max-w-full w-[1024px]">
        <div className="flex gap-5 max-md:flex-col">
          <TextContent />
          <VideoPlayer />
        </div>
      </div>
    </main>
  );
}