import React from "react";
import Image from "next/image";
import sui from "../asset/sui.png";
import image from "../asset/image.png";
import telegram from "../asset/telegram.png";
import twitter from "../asset/twitter.png";
export default function Hero() {
  return (
    <header className="flex overflow-hidden flex-col items-center px-20 pt-5  w-full bg-blue-600 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[1024px]">
        <nav className="flex flex-wrap gap-5 justify-between items-start self-stretch px-0.5 pt-1 pb-7 w-full font-bold text-white max-md:max-w-full">
          <div className="flex flex-wrap gap-7 mt-1 text-base">
            <div className="grow">CONTRACT</div>
            <div className="basis-auto">WHITEPAPER</div>
            <div className="basis-auto">COMMUNITY MEMES</div>
            <div className="basis-auto">OFFICIAL CONTENT</div>
          </div>
          <div className="flex gap-3.5 text-base leading-relaxed whitespace-nowrap">
            <div className="grow my-auto">0x9A2...7973</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/53f3eb060e341518a233908e271b660e118c318e1a1751552a967a5ae9cf5f28?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
              className="object-contain shrink-0 w-5 aspect-square"
              alt=""
            />
          </div>
        </nav>
        <div className="flex flex-wrap gap-5 justify-between self-stretch mt-5 w-full max-md:mr-2.5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/94c6dbc5f9baba8c23c4a2b8636040db532890572fe38556513799d2a8d74de8?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
            className="object-contain shrink-0 w-7 aspect-square"
            alt="Logo"
          />
          <div className="flex gap-2.5 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d603980e0e9e0010a5e355520c9d1d64f59db6f63feeb9f7bbb734fc875fae9b?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
              className="object-contain shrink-0 my-auto w-5 aspect-[1.18]"
              alt="Social icon 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0992f5c1e373805fc898e6107f00b8ccd01ce9a36ee2a340cfc6ae6ef2de6684?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
              className="object-contain shrink-0 aspect-[1.04] w-[25px]"
              alt="Social icon 2"
            />
          </div>
        </div>
        <div className="flex gap-5 max-w-full w-[299px]">
          <div className="flex flex-col">
            <Image
              src={image}
              alt="Decorative element"
              width={102}
              height={152}
              className="object-contain self-end max-w-full aspect-[1.52] w-[102px]"
            />

            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76e35de4ce0f7b99308bc5368757e0126936dc46d49163a42a40e1165c27540f?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
              className="object-contain mt-5 rounded-xl aspect-[1.04] w-[26px]"
              alt="Decorative icon"
            />
          </div>
          <Image
            src={sui}
            alt="Decorative element"
            width={200}
            height={20}
            className="object-contain shrink-0 self-end mt-24 w-[200px] aspect-[3.8] max-md:mt-10"
          />
        </div>
        <h1 className="mt-11 text-9xl text-center text-white leading-[128px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          ALEPHANT <br /> on SUI
        </h1>
        <p className="mt-10 text-3xl font-semibold leading-tight text-center text-white">
          THE LEGEND LIVES ON
        </p>
        <a
          href=""
          className="px-16 py-5 mt-16 w-60 max-w-full text-sm font-semibold leading-loose text-center text-blue-600 bg-white border border-solid border-slate-200 rounded-[53px] max-md:px-5 max-md:mt-10">
          Buy Now
        </a>
        <p className="mt-7 text-xs leading-none text-center text-white">
          Powered by SUI
        </p>
        <p className="mt-36 text-xl font-medium leading-none text-white max-md:mt-10">
          OFFICIAL LINKS:
        </p>
        <div className="flex gap-3 mt-4 w-64 max-w-full">
          <div>
            <a href="#" className="text-blue-600">
              <Image
                src={telegram}
                alt="Social media icon 2"
                width={16}
                height={16}
                className="object-contain shrink-0 w-8 aspect-square"
              />
              Twitter
            </a>
            <span className="self-start mt-3 text-gray-900">,</span>
          </div>
          <div className="flex gap-0.5 self-start mt-1">
            <a href="#" className="text-blue-600">
              {" "}
              <Image
                src={twitter}
                alt="Social media icon 2"
                width={16}
                height={16}
                className="object-contain shrink-0 w-8 aspect-square"
              />
              Telegram
            </a>
            <span className="self-start mt-3 text-gray-900">,</span>
          </div>
        </div>
      </div>
    </header>
  );
}
