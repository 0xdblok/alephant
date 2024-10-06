import React from "react";

function TextContent() {
  return (
    <section className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
        <h1 className="text-6xl leading-none text-gray-900 max-md:text-4xl">
          How to buy
        </h1>
        <p className="self-stretch mt-9 text-xl leading-7 text-gray-900 max-md:max-w-full">
          This video will show you how to buy directly <br /> here on the site
          through the <span className="font-bold">SUI Wallet</span> <br />{" "}
          <span className="font-bold"></span>. You can also buy on{" "}
        </p>
        <div className="flex gap-2.5 mt-3">
          <div className="flex flex-auto gap-0.5">
            <a href="#" className="text-lg leading-loose text-blue-600">
              SUI DEX
            </a>
            <span className="text-xl leading-snug text-gray-900 basis-auto"></span>
          </div>
          <a
            href="#"
            className="my-auto text-lg leading-loose text-blue-600"></a>
        </div>
      </div>
    </section>
  );
}

export default TextContent;
