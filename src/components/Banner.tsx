import React from "react";

const Banner = () => {
  return (
    <section className="m-0 p-0 py-16 relative banner-div text-center text-white font-poppins font-bold text-[32px] flex flex-row justify-center gap-8">
      <div className="bg-[#2d2d2d] opacity-75 absolute top-0 left-0 w-full h-full" />

      <h2 className="text-white  z-30">
        Book a car by getting in touch with us
      </h2>

      <span className="flex flex-row justify-center items-center gap-3 text-primary z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
        </svg>
        <h3>(123) 456-7869</h3>
      </span>
    </section>
  );
};

export default Banner;
