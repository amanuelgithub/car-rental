import { Outlet } from "react-router-dom";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import { Footer } from "./components/Footer";

interface LayoutProps {
  handleOpenMobileMenu: () => void;
  openMobileMenu: boolean;
  handleCloseMobileMenu: () => void;
}

const Layout = ({
  handleCloseMobileMenu,
  handleOpenMobileMenu,
  openMobileMenu,
}: LayoutProps) => {
  return (
    <main className="relative bg-white m-0 p-0 w-full">
      <Hero
        openMobileMenu={openMobileMenu}
        handleOpenMobileMenu={handleOpenMobileMenu}
        handleCloseMobileMenu={handleCloseMobileMenu}
      />

      <Outlet />

      <Banner />
      <Footer />
    </main>
  );
};

export default Layout;
