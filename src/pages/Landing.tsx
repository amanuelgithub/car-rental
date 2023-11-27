import BookCar from "../components/BookCar";
import VehicleModels from "../components/VehicleModels";
import FAQs from "../components/FAQs";
import { Footer } from "../components/Footer";
import Banner from "../components/Banner";
import LandingHero from "../components/LandingHero";
import PlanYourTrip from "../components/PlanYourTrip";
import Testimonials from "./Testimonials";

interface LandingProps {
  handleOpenMobileMenu: () => void;
  openMobileMenu: boolean;
  handleCloseMobileMenu: () => void;
}

function Landing({
  handleCloseMobileMenu,
  handleOpenMobileMenu,
  openMobileMenu,
}: LandingProps) {
  return (
    <main className="relative bg-white m-0 p-0 w-full">
      <LandingHero
        openMobileMenu={openMobileMenu}
        handleOpenMobileMenu={handleOpenMobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />

      <BookCar />
      <PlanYourTrip />
      <VehicleModels />
      {/* <Banner /> */}

      <section className="bg-[#2d2d2d] w-full px-6 2xl:px-28 pt-[50px] py-6 text-center text-white">
        <h2 className="font-poppins font-bold text-[42px] lg:text-5xl leading-snug">
          Save big with our cheap car rental!
        </h2>

        <p className="font-poppins text-xl lg:text-[24px] py-6">
          Top Airports. Local Suppliers.{" "}
          <span className="text-primary">24/7</span> Support.
        </p>
      </section>

      {/* why choose us */}
      <section className="relative h-full px-6 2xl:px-28 w-full bg-white py-24">
        <img
          src="/src/assets/main.70cd75042bdf42515d92.png"
          alt="main.70cd75042bdf42515d92.png"
          className="w-full"
        />

        <div className="w-full flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-2">
          <img
            src="/src/assets/bg.82b3bf0dc76cd35f3da0.png"
            alt="main.70cd75042bdf42515d92.png"
            className="w-fit absolute top-[30%] left-0"
          />

          {/* left */}
          <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
            <h3 className="lg:text-start text-center font-rubik font-semibold text-2xl py-4">
              Why Choose Us
            </h3>

            <h2 className="lg:text-start text-center font-rubik font-bold text-[42px] leading-10 max-w-lg">
              Best valued deals you will ever find
            </h2>

            <p className="max-w-lg font-rubik py-8 text-base text-secondary-light lg:text-start text-center">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>

            <a
              href="/"
              className="whitespace-nowrap flex font-bold font-rubik text-base text-white bg-primary px-8 py-4 rounded-sm"
            >
              Find Details &nbsp;{" "}
              <img src="/src/assets/right-arrow.svg" alt="right-arrow.svg" />
            </a>
          </div>

          {/* right */}
          <div className="flex flex-col gap-3 items-center">
            <div className="flex flex-row justify-start items-start gap-2">
              <img src="/src/assets/download (2).png" alt="download (2).png" />

              <div>
                <h3 className=" font-rubik font-semibold text-[24px]">
                  Cross Country Drive
                </h3>

                <p className="max-w-sm font-rubik py-4 text-base text-secondary-light ">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-start gap-2">
              <img src="/src/assets/download (1).png" alt="download (1).png" />

              <div>
                <h3 className=" font-rubik font-semibold text-[24px]">
                  All Inclusive Pricing
                </h3>

                <p className="max-w-sm font-rubik py-4 text-base text-secondary-light ">
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-start gap-2">
              <img src="/src/assets/download.png" alt="download.png" />

              <div>
                <h3 className="font-rubik font-semibold text-[24px]">
                  Cross Country Drive
                </h3>

                <p className="max-w-sm font-rubik py-4 text-base text-secondary-light ">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQs />

      {/* Download Apps */}
      <section className="relative px-6 2xl:px-28 min-h-[558px] flex flex-col justify-center items-start bg-[#f8f8f8]">
        <img
          src="/src/assets/bg02.3efbc4567749d0a5671e.png"
          alt="bg02.3efbc4567749d0a5671e.png"
          className="absolute top-0 left-0  w-[1600px] h-[558px] object-none hidden md:block"
        />

        <div className="relative py-6 z-30 w-full flex flex-col items-center md:items-start">
          <div className="max-w-[550px]">
            <h2 className="text-center md:text-start font-poppins font-bold text-[42px] leading-snug ">
              Download our app to get most out of it
            </h2>

            <p className="font-rubik py-8 text-base text-secondary-light text-center md:text-start">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center md:justify-start gap-5">
              <img
                src="/src/assets/googleapp.e6493904327fe3f9b89c7c75a4f3ae74.svg"
                alt="googleapp.e6493904327fe3f9b89c7c75a4f3ae74.svg"
                width={203}
              />

              <img
                src="/src/assets/appstore.35481c6295b0744dfcc00d35874fbdd8.svg"
                alt="appstore.35481c6295b0744dfcc00d35874fbdd8.svg"
                width={203}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Landing;
