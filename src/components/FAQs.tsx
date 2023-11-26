import React, { useEffect, useState } from "react";

const queAndAns = [
  {
    q: "1. What is special about comparing rental car deals?",
    ans: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    q: "2. How do I find the car rental deals?",
    ans: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    q: "3. How do I find such low rental car prices?",
    ans: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];

function FAQs() {
  const [openedFAQIndex, setOpenedFAQIndex] = useState<undefined | number>(
    undefined
  );

  const handleOpenedFAQIndex = (index: number) => {
    if (index === openedFAQIndex) {
      setOpenedFAQIndex(undefined);
    } else {
      setOpenedFAQIndex(index);
    }
  };

  useEffect(() => {
    console.log("opned: ", openedFAQIndex);
  }, [openedFAQIndex, setOpenedFAQIndex]);

  return (
    <section className="relative bg-white py-24">
      <div className="flex flex-col items-center">
        <h3 className="text-center font-rubik font-semibold text-[22px] py-2">
          FAQ
        </h3>

        <h2 className="text-center font-rubik font-bold text-[42px] leading-10">
          Frequently Asked Questions
        </h2>

        <p className="max-w-3xl font-rubik py-8 text-base text-secondary-light text-center">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>

      <div className="relative w-full flex flex-col items-center">
        <img
          src="/src/assets/car.5e21eedbea3280311aff.png"
          alt="car.5e21eedbea3280311aff.png"
          className="absolute -top-12 left-0"
        />

        <div className="max-w-[800px] w-full z-20 bg-white shadow-xl">
          {queAndAns.map((content, i) => (
            <div key={i} className="border-b py-2">
              <div
                onClick={() => handleOpenedFAQIndex(i)}
                className={`flex items-center justify-between w-full px-11 py-4 focus:outline-none hover:cursor-pointer 
                ${
                  openedFAQIndex !== undefined && openedFAQIndex === i
                    ? "bg-primary text-white"
                    : "text-secondary"
                }`}
              >
                <p className="text-lg font-poppins font-semibold">
                  {content.q}
                </p>

                <img src="/src/assets/down-arrow.svg" alt="down-arrow.svg" />
                {/* {openedFAQIndex !== undefined && openedFAQIndex === i
                    ? "-"
                    : "+"} */}
              </div>

              {openedFAQIndex !== undefined && openedFAQIndex === i ? (
                <div className="mt-2  px-11 py-4 text-base font-rubik text-secondary-light">
                  {content.ans}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
