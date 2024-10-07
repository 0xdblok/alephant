import React from "react";

function FAQItem({ question, answer, additionalText }) {
  return (
    <article className="arbutus-regular  flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col text-gray-900 max-md:mt-10 max-md:max-w-full">
        <h2 className="mr-7 text-5xl leading-none max-md:mr-2.5 max-md:max-w-full">
          {question}
        </h2>
        <p className="mt-5 text-xl leading-7 max-md:max-w-full">{answer}</p>
        {additionalText && (
          <p className="mt-10 leading-snug">{additionalText}</p>
        )}
      </div>
    </article>
  );
}

export default FAQItem;
