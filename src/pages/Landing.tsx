import BookCar from "../components/BookCar";
import VehicleModels from "../components/VehicleModels";
import FAQs from "../components/FAQs";
import { Footer } from "../components/Footer";
import Banner from "../components/Banner";
import LandingHero from "../components/LandingHero";

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

      {/* plan your trip section */}
      <section className="px-6 2xl:px-28 pt-[53px] bg-white">
        <h3 className="text-center font-rubik font-semibold text-2xl">
          Plan your trip now
        </h3>
        <h2 className="text-center font-rubik font-bold text-[42px]">
          Quick &amp; easy car rental
        </h2>

        <div className="w-full py-14 flex flex-col gap-4 flex-wrap md:gap-0 md:flex-row justify-center items-center">
          <div className="w-full sm:w-1/2 xl:w-1/3 flex flex-col items-center justify-center text-center">
            <img
              src="/src/assets/download (5).png"
              alt="download (5).png"
              className="block"
            />

            <h3 className="text-center font-rubik font-bold text-2xl">
              Select Car
            </h3>

            <p className="max-w-xs font-rubik py-4 text-base text-secondary-light">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>

          <div className="w-full sm:w-1/2 xl:w-1/3 flex flex-col items-center justify-center text-center">
            <img
              src="/src/assets/download (4).png"
              alt="download (4).png"
              className="block"
            />

            <h3 className="text-center font-rubik font-bold text-2xl">
              Contact Operator
            </h3>

            <p className="max-w-xs font-rubik py-4 text-base text-secondary-light">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>

          <div className="w-full sm:w-1/2 xl:w-1/3 flex flex-col items-center justify-center text-center">
            <img
              src="/src/assets/download (3).png"
              alt="download (3).png"
              className="block"
            />

            <h3 className="text-center font-rubik font-bold text-2xl">
              Let's Drive
            </h3>

            <p className="max-w-xs font-rubik py-4 text-base text-secondary-light">
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </section>

      {/* vehicle models section */}
      <VehicleModels />

      <Banner />

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

      {/* client's testimonials */}
      <section className="relative  px-6 2xl:px-28 bg-[#f8f8f8] py-24 z-20">
        <div className="flex flex-col items-center">
          <h3 className="text-center font-rubik font-semibold text-[22px] py-2">
            Reviewed by People
          </h3>

          <h2 className="text-center font-rubik font-bold text-[42px] leading-10">
            Client's Testimonials
          </h2>

          <p className="max-w-2xl font-rubik py-8 text-base text-secondary-light text-center">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
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
                  <h5 className="font-poppins text-lg font-bold">
                    Parry Hotter
                  </h5>
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

      {/* FAQs */}
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
