import React from "react";

function Testimonials() {
  return (
    <section className="relative  px-6 2xl:px-28 bg-[#f8f8f8] py-24 z-20">
      <div className="flex flex-col items-center">
        <h3 className="text-center font-rubik font-semibold text-[22px] py-2">
          Reviewed by People
        </h3>

        <h2 className="text-center font-rubik font-bold text-[42px] leading-10">
          Client's Testimonials
        </h2>

        <p className="max-w-2xl font-rubik py-8 text-base text-secondary-light text-center">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-4  md:flex-row md:justify-center md:gap-8">
        <div className="bg-white shadow-xl px-7 py-12 flex flex-col justify-between min-h-fit lg:min-h-[350px] max-w-[540px]">
          <p className="font-poppins text-[22px] font-[500]">
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </p>

          <div className="flex flex-row justify-between pt-10">
            <div className="flex flex-row gap-3 items-center">
              <img
                src="/src/assets/pfp1.ba7974ae51bb5d44fa69.jpg"
                alt="pfp1.ba7974ae51bb5d44fa69.jpg"
                className="w-[70px] h-[70px] rounded-full"
              />

              <div>
                <h5 className="font-poppins text-lg font-bold">Parry Hotter</h5>
                <h5 className="font-rubik text-base">Belgrade</h5>
              </div>
            </div>

            <img src="/src/assets/quote.svg" alt="quote.svg" />
          </div>
        </div>

        <div className="bg-white shadow-xl px-7 py-12 flex flex-col justify-between min-h-fit lg:min-h-[350px] max-w-[540px]">
          <p className="font-poppins text-[22px] font-[500]">
            "The car was in great condition and made our trip even better.
            Highly recommend for this car rental website!"
          </p>

          <div className="flex flex-row justify-between pt-10">
            <div className="flex flex-row gap-3 items-center">
              <img
                src="/src/assets/pfp2.fd9b1716200244ed8905.jpg"
                alt="pfp2.fd9b1716200244ed8905.jpg"
                className="w-[70px] h-[70px] rounded-full"
              />

              <div>
                <h5 className="font-poppins text-lg font-bold">Ron Rizzly</h5>
                <h5 className="font-rubik text-base">Novi Sad</h5>
              </div>
            </div>

            <img src="/src/assets/quote.svg" alt="quote.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
