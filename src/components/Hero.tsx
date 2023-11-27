import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

interface HeroProps {
  handleOpenMobileMenu: () => void;
  openMobileMenu: boolean;
  handleCloseMobileMenu: () => void;
}

const Hero = ({
  handleCloseMobileMenu,
  handleOpenMobileMenu,
  openMobileMenu,
}: HeroProps) => {
  const [pageName, setPageName] = useState<string[]>();
  const { pathname } = useLocation();

  useEffect(() => {
    const pathValues = pathname.split("/");
    setPageName([pathValues[1]]);
  }, [pathname]);

  return (
    <>
      <Navbar
        openMobileMenu={openMobileMenu}
        handleOpenMobileMenu={handleOpenMobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />

      <section className="max-h-[410px] h-[410px]">
        <div className="absolute top-0 right-0 w-full">
          <img
            src="/src/assets/heroes-bg.71ab9a13d73de3860763.png"
            alt="heroes-bg.71ab9a13d73de3860763.png"
            className="min-h-[410px] object-cover opacity-10"
          />
        </div>

        <div className="px-6 2xl:px-28 flex flex-col justify-center items-start h-full relative z-10">
          <h1
            className="text-4xl font-bold"
            style={{ textTransform: "capitalize" }}
          >
            {pageName}
          </h1>

          <h3 className="py-4 text-xl font-poppins font-semibold">
            <Link
              to={"/"}
              className="hover:text-primary transition duration-200 ease-in-out"
            >
              Home
            </Link>
            {" / "}
            <span style={{ textTransform: "capitalize" }}>{pageName}</span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default Hero;
