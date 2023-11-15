import React from "react";

function VehicleModels() {
  return (
    <section className="py-10 px-6 2xl:px-28 bg-white">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center font-rubik font-semibold text-2xl">
          Vehicle Models
        </h3>
        <h2 className="text-center font-rubik font-bold text-[42px]">
          Our rental fleet
        </h2>

        <p className="max-w-lg font-rubik py-4 text-base text-secondary-light text-center">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>

      <div className="flex flex-col justify-center items-center md:flex-row  lg:justify-between lg:items-center lg:flex-nowrap md:flex-wrap md:justify-between my-6">
        <div className="flex flex-col gap-2 lg:max-w-fit w-full">
          <button className="block whitespace-nowrap text-white text-2xl font-poppins font-semibold min-w-full text-start py-4 px-4 bg-primary">
            Audi A1 S-Line
          </button>
          <button className="block whitespace-nowrap text-secondary text-2xl font-poppins font-semibold min-w-full text-start py-4 px-4 bg-secondary-extra-light">
            VW Golf 6
          </button>
          <button className="block whitespace-nowrap text-secondary text-2xl font-poppins font-semibold min-w-full text-start py-4 px-4 bg-secondary-extra-light">
            Toyota Camry
          </button>
          <button className="block whitespace-nowrap text-secondary text-2xl font-poppins font-semibold min-w-full text-start py-4 px-4 bg-secondary-extra-light">
            BMW 320 ModernLine
          </button>
          <button className="block whitespace-nowrap text-secondary text-2xl font-poppins font-semibold min-w-full text-start py-4 px-4 bg-secondary-extra-light">
            Mercedes-Benz GLK
          </button>
          <button className="block whitespace-nowrap text-secondary text-2xl font-poppins font-semibold min-w-full text-start py-4 px-4 bg-secondary-extra-light">
            VW Passat CC
          </button>
        </div>

        <div className="h-full w-full md:w-fit flex flex-row justify-center  bg-yellow-500">
          <img
            src="/src/assets/audia1.d038cf70b700e34e607a.jpg"
            alt="audia1.d038cf70b700e34e607a.jpg"
            className="h-fit w-full md:w-fit"
          />
        </div>

        <div className="max-w-[250px] w-[250px] lg:w-full">
          <div className="bg-primary text-white text-center text-lg font-poppins px-2 py-3">
            <span className="text-[28px] font-bold text-center">$ 45 </span>/
            rent per day
          </div>

          <div>
            <div className="grid grid-cols-2 gap-2 text-center border-r-2 border-l-2 border-b-2 border-secondary">
              <span className="col-span-1 mx-2 my-2 border-r border-secondary">
                Model
              </span>
              <span className="col-span-1 mx-2 my-2">Audi</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center border-r-2 border-l-2 border-b-2 border-secondary">
              <span className="col-span-1 mx-2 my-2 border-r border-secondary">
                Model
              </span>
              <span className="col-span-1 mx-2 my-2">Audi</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center border-r-2 border-l-2 border-b-2 border-secondary">
              <span className="col-span-1 mx-2 my-2 border-r border-secondary">
                Model
              </span>
              <span className="col-span-1 mx-2 my-2">Audi</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center border-r-2 border-l-2 border-b-2 border-secondary">
              <span className="col-span-1 mx-2 my-2 border-r border-secondary">
                Model
              </span>
              <span className="col-span-1 mx-2 my-2">Audi</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center border-r-2 border-l-2 border-b-2 border-secondary">
              <span className="col-span-1 mx-2 my-2 border-r border-secondary">
                Model
              </span>
              <span className="col-span-1 mx-2 my-2">Audi</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center border-r-2 border-l-2 border-b-2 border-secondary">
              <span className="col-span-1 mx-2 my-2 border-r border-secondary">
                Model
              </span>
              <span className="col-span-1 mx-2 my-2">Audi</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center border-r-2 border-l-2 border-b-2 border-secondary">
              <span className="col-span-1 mx-2 my-2 border-r border-secondary">
                Model
              </span>
              <span className="col-span-1 mx-2 my-2">Audi</span>
            </div>
          </div>

          <a
            href="#"
            className="block mt-4 bg-primary text-white text-center text-lg font-poppins px-2 py-3"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default VehicleModels;
