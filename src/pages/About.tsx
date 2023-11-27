import React from "react";
import PlanYourTrip from "../components/PlanYourTrip";

const About = () => {
  return (
    <>
      <section className="py-24 2xl:py-28 flex flex-col items-center justify-end min-[892px]:items-end min-[892px]:flex-row gap-14 min-[892px]:justify-center">
        <div className="sm:w-1/2 flex flex-col items-end">
          <img
            src="/src/assets/about-main.ed0137841dc67d61ec95.jpg"
            alt="about-main.ed0137841dc67d61ec95.jpg"
            className="w-[415px]"
          />
        </div>

        <div className="sm:w-1/2">
          <div className="max-w-[435px]">
            <h3 className="text-center min-[892px]:text-start font-rubik text-[22px] font-medium">
              About Company
            </h3>

            <h2 className="text-center min-[892px]:text-start font-poppins text-[42px] leading-tight font-bold">
              You start the engine and your adventure begins
            </h2>

            <p className="text-center min-[892px]:text-start font-rubik text-base text-secondary-light py-5">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>

            <div className="flex flex-col items-center w-full gap-8 justify-center sm:flex-row sm:items-end sm:justify-start">
              <div className="flex flex-col items-center sm:items-start">
                <img
                  src="/src/assets/download (8).png"
                  alt="download (8).png"
                />

                <div className="flex flex-col items-center sm:flex-row justify-start gap-2">
                  <p className="block font-poppins text-[46px] font-extrabold">
                    20
                  </p>

                  <span className="text-base font-rubik text-secondary-light">
                    Car Types
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <img
                  src="/src/assets/download (7).png"
                  alt="download (7).png"
                />

                <div className="flex flex-col items-center sm:flex-row justify-start gap-2">
                  <p className="block font-poppins text-[46px] font-extrabold">
                    85
                  </p>

                  <span className="text-base font-rubik text-secondary-light">
                    Rental Outlet
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <img
                  src="/src/assets/download (6).png"
                  alt="download (6).png"
                />

                <div className="flex flex-col items-center sm:flex-row justify-start gap-2">
                  <p className="block font-poppins text-[46px] font-extrabold">
                    75
                  </p>

                  <span className="text-base font-rubik text-secondary-light">
                    Repair Shops
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlanYourTrip />
    </>
  );
};

export default About;
