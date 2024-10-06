import React from "react";

function SmartWalletSection() {
  return (
    <section className="self-stretch mt-32 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl leading-none text-gray-900 max-md:max-w-full max-md:text-4xl">
        What's a Smart Wallet?
      </h2>
      <p className="mt-14 text-xl leading-7 text-gray-900 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
        Smart Wallets are the officially supported way to interact with
        cryptocurrencies directly (rather than using a centralized service).
      </p>
      <a
        href="#"
        className="mt-10 text-xl leading-none text-blue-600 max-md:mt-10">
        Read more about the Coinbase Smart Wallet
      </a>
    </section>
  );
}

export default SmartWalletSection;
