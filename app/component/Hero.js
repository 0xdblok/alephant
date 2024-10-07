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
          <div className="flex gap-2.5 self-start"></div>
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
          </div>
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
        <div className="flex gap-3 mt-4 ml-8 w-64 max-w-full flex justify-center items-center">
          <div>
            <a href="#" className="text-blue-600 -4">
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
