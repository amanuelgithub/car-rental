import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  handleOpenMobileMenu: () => void;
  openMobileMenu: boolean;
  handleCloseMobileMenu: () => void;
}

function Navbar({
  handleCloseMobileMenu,
  handleOpenMobileMenu,
  openMobileMenu,
}: NavbarProps) {
  return (
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
          <Link to="/">Home</Link>
        </li>
        <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
          <Link to="/about">About</Link>
        </li>
        <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
          <Link to="/models">Vehicle Models</Link>
        </li>
        <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
          <Link to="/team">Our Team</Link>
        </li>
        <li className="font-rubik whitespace-nowrap font-[500] text-secondary">
          <Link to="/contact-us">Contact</Link>
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
              <Link to="/">Home</Link>
            </li>
            <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
              <Link to="/about">About</Link>
            </li>
            <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
              <Link to="/model">Models</Link>
            </li>
            <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
              <Link to="/team">Our Team</Link>
            </li>
            <li className="font-poppins text-[23px] whitespace-nowrap font-[500] text-secondary">
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
