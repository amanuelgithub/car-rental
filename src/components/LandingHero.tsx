import Navbar from "./Navbar";

interface LandingHeroProps {
  handleOpenMobileMenu: () => void;
  openMobileMenu: boolean;
  handleCloseMobileMenu: () => void;
}

function LandingHero({
  handleCloseMobileMenu,
  handleOpenMobileMenu,
  openMobileMenu,
}: LandingHeroProps) {
  return (
    <>
      <Navbar
        openMobileMenu={openMobileMenu}
        handleOpenMobileMenu={handleOpenMobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />

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
    </>
  );
}

export default LandingHero;
