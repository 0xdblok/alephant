import React from "react";

function VideoPlayer() {
  return (
    <section className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow rounded-2xl max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col pt-80 pb-5 w-full max-md:pt-24 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
            <div className="flex gap-1 items-center text-sm leading-3 text-white">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ec0aed59dde4880db20638c31d22f1b7a6dfe032f98b587fe1abc3fefcae6e4?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                alt=""
                className="object-contain shrink-0 self-stretch w-12 aspect-square"
              />
              <span className="self-stretch my-auto text-right">0:00</span>
              <span className="self-stretch my-auto">/ 0:17</span>
            </div>
            <div className="flex">
              <button aria-label="Play/Pause">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed812869ef8ae8be254049be51de8348df95e689b0171f5919b358d17f51aefb?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                  alt=""
                  className="object-contain shrink-0 w-12 aspect-square"
                />
              </button>
              <button aria-label="Mute/Unmute">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c8e2f80c0639959607e5da2daf0ded44e30a7f824a2ce1c6fd338fda7a6af?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                  alt=""
                  className="object-contain shrink-0 w-12 aspect-square"
                />
              </button>
              <button aria-label="Fullscreen">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f645acad943fb997f38bba070ce8115c9054e3d58d441341da77a2b93363465f?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                  alt=""
                  className="object-contain shrink-0 w-12 aspect-square"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start mx-4 rounded-sm bg-white bg-opacity-30 shadow-[0px_2px_10px_rgba(0,0,0,0.5)] max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex shrink-0 h-1 rounded-sm bg-white bg-opacity-50 w-[65px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoPlayer;
