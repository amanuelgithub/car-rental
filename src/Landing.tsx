import { useState } from "react";
import BookCar from "./components/BookCar";
import VehicleModels from "./components/VehicleModels";

function Landing() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => setOpenMobileMenu(true);
  const handleCloseMobileMenu = () => setOpenMobileMenu(false);

  return (
    <main className="relative bg-[#F8F8F8] m-0 p-0 w-full">
      <nav className="absolute top-0 left-0 w-full px-6 pt-4 2xl:px-28 flex flex-row justify-between items-center z-20">
        <div>
          <img
            src="/src/assets/logo.0ad964cb93ab30cc809d.png"
            alt="logo"
            width={145}
            height={52}
            className="w-[145px] h-[52px]"
          />
        </div>

        <ul className="hidden lg:flex flex-row justify-center gap-8">
          <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
            <a href="#">Home</a>
          </li>
          <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
            <a href="#">About</a>
          </li>
          <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
            <a href="#">Vehicle Models</a>
          </li>
          <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
            <a href="#">Testimonials</a>
          </li>
          <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
            <a href="#">Our Team</a>
          </li>
          <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul className="hidden lg:flex flex-row justify-center items-center gap-8">
          <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
            <a href="#">Sign In</a>
          </li>
          <li className="font-rubik whitespace-nowrap font-[500] text-white bg-primary inline-block px-8 py-4 rounded-md shadow-lg">
            <a href="#">Register</a>
          </li>
        </ul>

        {/* mobile */}
        <button onClick={handleOpenMobileMenu} className="lg:hidden">
          <img
            src="/src/assets/menu.svg"
            alt="menu.svg"
            className="inline-block"
          />
        </button>

        {/* mobile menu */}
        {openMobileMenu && (
          <div className="lg:hidden absolute top-0 left-0 p-8 w-screen h-screen bg-white flex flex-col">
            <div className="w-full flex justify-end">
              <button onClick={handleCloseMobileMenu}>
                <img
                  src="/src/assets/close.svg"
                  alt="close.svg"
                  className="inline-block"
                />
              </button>
            </div>

            <ul className="h-full flex flex-col justify-center items-center gap-12">
              <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
                <a href="#">Home</a>
              </li>
              <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
                <a href="#">About</a>
              </li>
              <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
                <a href="#">Models</a>
              </li>
              <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
                <a href="#">Testimonials</a>
              </li>
              <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
                <a href="#">Our Team</a>
              </li>
              <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-row justify-center md:justify-start w-full">
        <div className="text-center md:text-start w-full px-6 2xl:px-28 lg:w-1/2 min-h-screen flex flex-col justify-center items-center md:items-start gap-2 text-secondary z-10">
          <h5 className="font-rubik text-2xl font-[500]">Plan your trip now</h5>

          <h1 className="font-poppins text-[52px] font-bold leading-[1.2]">
            Save <span className="text-primary">big</span> with our car rental
          </h1>

          <p className="font-rubik py-4 text-base text-secondary-light">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>

          <div className="flex flex-col min-[400px]:flex-row gap-3">
            <a
              href="/"
              className="whitespace-nowrap flex font-bold font-rubik text-base text-white bg-primary px-8 py-4 rounded-sm"
            >
              Book Ride &nbsp;{" "}
              <img
                src="/src/assets/circular-check.svg"
                alt="circular-check.svg"
              />
            </a>

            <a
              href="/"
              className="whitespace-nowrap flex font-bold font-rubik text-base text-white bg-secondary px-8 py-4 rounded-sm"
            >
              Learn More &nbsp;{" "}
              <img src="/src/assets/right-arrow.svg" alt="right-arrow.svg" />
            </a>
          </div>
        </div>

        <div className="hidden md:w-1/2 md:flex flex-col justify-center items-end">
          <img
            src="/src/assets/hero-bg.3b5f7a2502f0f81d1490.png"
            alt="bg-hero"
            className="absolute top-0 right-0 object-right z-0"
          />

          <img
            src="/src/assets/main-car.9b30faa59387879fa060.png"
            alt="main-car"
            className="mt-20 z-0"
            // className="absolute top-48 right-0 w-[65%] mt-20 z-0"
          />
        </div>
      </section>

      {/* book car section*/}
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

      {/* banner section */}
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

        <div className="flex flex-col justify-center items-center gap-4  md:flex-row md:justify-center md:gap-2">
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
    </main>
  );
}

export default Landing;
