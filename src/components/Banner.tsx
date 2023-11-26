import React from "react";

const Banner = () => {
  return (
    <section className="bg-[#2d2d2d] w-full px-6 2xl:px-28 pt-[50px] py-6 text-center text-white">
      <h2 className="font-poppins font-bold text-[42px] lg:text-5xl leading-snug">
        Save big with our cheap car rental!
      </h2>

      <p className="font-poppins text-xl lg:text-[24px] py-6">
        Top Airports. Local Suppliers.{" "}
        <span className="text-primary">24/7</span> Support.
      </p>
    </section>
  );
};

export default Banner;
