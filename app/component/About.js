import React from "react";
import Image from "next/image";
import logo from "../asset/logo.png";
export default function About() {
  return (
    <div className="px-20 flex flex-col items-center justify-center pt-32">
      <div>
        <h1 className="text-6xl leading-none text-gray-900 max-md:text-4xl">
          About
        </h1>
      </div>
      <div className=" pt-12">
        <Image src={logo} alt="Skinny" width={1024} height={576} />
      </div>

      <div className="pt-6">
        <p className="text-xl leading-7 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          Alephant is an iconic internet meme featuring a elephent named Fatso,
          who plays a keyboard with surprising
          <br />
          musical talent! Since Fatso's debut in 2007, two other elephent, Bento
          and Fatty, have carried on the legacy,
          <br />
          keeping the internet entertained with their paws-on performances.
          Together, these three feline virtuosos
          <br />
          have become a symbol of meme culture, inspiring laughter and countless
          parodies
        </p>
      </div>
    </div>
  );
}
