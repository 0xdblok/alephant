import React from "react";

function GetInvolvedSection() {
  return (
    <section className=" arbutus-regular  mt-40 max-md:mt-10">
      <h2 className="text-5xl leading-none text-gray-900 max-md:text-4xl">
        Get Involved!
      </h2>
      <div className="flex gap-2 mt-16 max-md:mt-10">
        <p className="grow text-xl leading-snug text-gray-900 max-md:max-w-full">
          A memecoin is only as strong as its community so please join us on{" "}
        </p>
        <div className="flex my-auto text-xl leading-snug">
          <a href="#" className="text-blue-600">
            X
          </a>
          <span className="self-start mt-3 text-gray-900">,</span>
        </div>
        <div className="flex gap-0.5 self-start mt-1">
          <a href="#" className="grow text-lg leading-loose text-blue-600">
            Telegram
          </a>
          <span className="text-xl leading-snug text-gray-900">,</span>
        </div>
        <div className="flex gap-1 my-auto text-xl leading-snug">
          <a href="#" className="grow text-blue-600">
            Farcaster
          </a>
          <span className="self-start mt-3 text-gray-900">,</span>
        </div>
        <div className="flex gap-0.5 self-start">
          <a
            href="#"
            className="grow my-auto text-lg leading-loose text-blue-600">
            Facebook
          </a>
          <span className="text-xl leading-snug text-gray-900">, and</span>
        </div>
      </div>
      <div className="flex gap-0.5 mt-2.5 whitespace-nowrap">
        <a href="#" className="grow text-lg leading-loose text-blue-600">
          Reddit
        </a>
        <span className="text-xl leading-snug text-gray-900">!</span>
      </div>
      <p className="mt-10 text-xl leading-snug text-gray-900 max-md:max-w-full">
        Join our community and share your ideas, or just hang out :-)
      </p>
      <p className="mt-9 text-xl leading-7 text-gray-900 max-md:max-w-full">
        As this is a decentralized cryptocurrency everyone should feel empowered
        to contribute; it is up to the community to work together and spread the
        love that is the Alephant!
      </p>
    </section>
  );
}

export default GetInvolvedSection;
