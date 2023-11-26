import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Layout from "./Layout";
import About from "./pages/About";
import { useState } from "react";
import Models from "./pages/Models";
import Testimonials from "./pages/Testimonials";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";

function App() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => setOpenMobileMenu(true);
  const handleCloseMobileMenu = () => setOpenMobileMenu(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Landing
              openMobileMenu={openMobileMenu}
              handleOpenMobileMenu={handleOpenMobileMenu}
              handleCloseMobileMenu={handleCloseMobileMenu}
            />
          }
        />

        <Route
          element={
            <Layout
              openMobileMenu={openMobileMenu}
              handleOpenMobileMenu={handleOpenMobileMenu}
              handleCloseMobileMenu={handleCloseMobileMenu}
            />
          }
        >
          <Route path="about" element={<About />} />
          <Route path="models" element={<Models />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
