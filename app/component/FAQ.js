"use client";
import React from "react";
import FAQItem from "./FAQ/FAQItem";
import SmartWalletSection from "./FAQ/SmartWalletSection";

import GetInvolvedSection from "./FAQ/GetInvolvedSection";

function FAQ() {
  const faqItems = [
    {
      question: "What's a meme coin?",
      answer:
        "Meme coins are a type of cryptocurrency with no intrinsic value, but are traded amongst a community who share a common interest/humor. These coins are often created as a joke or parody, and are not intended to be used as a serious investment!",
    },
    {
      question: "So Alephant is like Dogecoin?",
      answer:
        "This token and Dogecoin are indeed very similar (they both can go to the moon!). However, this meme coin is unique in that it pays tribute to the historical and iconic Alephant, and is brand spankin' new.",
      additionalText: "You're early!",
    },
  ];

  return (
    <main className=" arbutus-regular  flex flex-col items-center px-20 pt-14 pb-48 bg-white max-md:px-5 max-md:pb-24">
      <section className="flex flex-col items-start max-w-full w-[1021px]">
        <h1 className="text-6xl leading-none text-gray-900 max-md:text-4xl">
          FAQ
        </h1>
        <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {faqItems.map((item, index) => (
              <FAQItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default FAQ;
