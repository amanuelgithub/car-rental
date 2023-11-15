import React from "react";

function BookCar() {
  return (
    <section className="relative mb-4 px-6 2xl:px-28 z-20">
      <div className="bg-white px-8 py-11 rounded-md shadow-lg bg-[url('/src/assets/book-bg.6f629a1041e9fd9c6685.png')]">
        <h5 className="font-rubik text-2xl font-[500]">Book a car</h5>

        <div className="my-8 flex flex-col md:flex-row md:gap-4 flex-wrap justify-between">
          {/* car type */}
          <div className="w-full md:w-[49%] lg:w-[32%]">
            <label className="flex py-3 flex-row font-poppins text-base font-semibold">
              <img src="/src/assets/icons/car-icon.svg" alt="car-icon.svg" />{" "}
              &nbsp; Select Your Car Type <b className="text-primary">*</b>
            </label>

            <select className="border-[1px] px-2 py-3 outline-none  border-secondary-extra-light w-full text-base text-secondary-light">
              <option>Select your car type</option>
              <option value="Audi A1 S-Line">Audi A1 S-Line</option>
              <option value="VW Golf 6">VW Golf 6</option>
              <option value="Toyota Camry">Toyota Camry</option>
              <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
              <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
              <option value="VW Passat CC">VW Passat CC</option>
            </select>
          </div>

          {/* pick up location */}
          <div className="w-full md:w-[49%] lg:w-[32%]">
            <label className="flex py-3 flex-row font-poppins text-base font-semibold">
              <img
                src="/src/assets/icons/location-icon.svg"
                alt="location-icon.svg"
              />{" "}
              &nbsp; Pick-up <b className="text-primary">*</b>
            </label>

            <select className="border-[1px] px-2 py-3 outline-none  border-secondary-extra-light w-full text-base text-secondary-light">
              <option>Select pick up location</option>
              <option>Belgrade</option>
              <option>Novi Sad</option>
              <option>Nis</option>
              <option>Kragujevac</option>
              <option>Subotica</option>
            </select>
          </div>

          {/* drop location */}
          <div className="w-full md:w-[49%] lg:w-[32%]">
            <label className="flex py-3 flex-row font-poppins text-base font-semibold">
              <img
                src="/src/assets/icons/location-icon.svg"
                alt="location-icon.svg"
              />{" "}
              &nbsp; Drop-of <b className="text-primary">*</b>
            </label>

            <select className="border-[1px] px-2 py-3 outline-none  border-secondary-extra-light w-full text-base text-secondary-light">
              <option>Select pick up location</option>
              <option>Belgrade</option>
              <option>Novi Sad</option>
              <option>Nis</option>
              <option>Kragujevac</option>
              <option>Subotica</option>
            </select>
          </div>

          {/* pick up date */}
          <div className="w-full md:w-[49%] lg:w-[32%]">
            <label className="flex py-3 flex-row font-poppins text-base font-semibold">
              <img
                src="/src/assets/icons/calander-icon.svg"
                alt="location-icon.svg"
              />{" "}
              &nbsp; Pick-up <b className="text-primary">*</b>
            </label>

            <input
              type="date"
              className="border-[1px] outline-none font-rubik px-2 py-3 text-[16px] border-secondary-extra-light w-full text-secondary-light"
            />
          </div>

          {/* drop date */}
          <div className="w-full md:w-[49%] lg:w-[32%]">
            <label className="flex py-3 flex-row font-poppins text-base font-semibold">
              <img
                src="/src/assets/icons/calander-icon.svg"
                alt="location-icon.svg"
              />{" "}
              &nbsp; Drop-of <b className="text-primary">*</b>
            </label>

            <input
              type="date"
              className="border-[1px] outline-none font-rubik px-2 py-3 text-[16px] border-secondary-extra-light w-full text-secondary-light"
            />
          </div>

          <div className="w-full md:w-[49%] lg:w-[32%] flex flex-col justify-end">
            <button className="py-4 font-rubik whitespace-nowrap font-[500] text-white  bg-primary shadow-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCar;
