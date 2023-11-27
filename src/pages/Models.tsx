import React from "react";
import ModelAudi from "/src/assets/car-models/audi-box.b3263089022dd5e025dc.png";
import ModelBenz from "/src/assets/car-models/benz-box.a9aa68ef5eb5af1f342b.png";
import ModelMBW from "/src/assets/car-models/bmw-box.185d90ec902e13d80eea.png";
import ModelGold6 from "/src/assets/car-models/golf6-box.1982e958d19e04048c14.png";
import ModelPassat from "/src/assets/car-models/passat-box.c78021e11cf230128bcc.png";
import ModelToyota from "/src/assets/car-models/toyota-box.8968332b7901c6bb183c.png";

const carRentalInfo = [
  {
    modelName: "Audi A1",
    pricePerDay: 45,
    rating: 0,
    engine: "Audi",
    type: "Manuel",
    fuelType: "Diesel",
    imgUrl: ModelAudi,
  },
  {
    modelName: "Golf 6",
    pricePerDay: 37,
    rating: 0,
    engine: "VW",
    type: "Manuel",
    fuelType: "Diesel",
    imgUrl: ModelGold6,
  },
  {
    modelName: "Toyota",
    pricePerDay: 30,
    rating: 0,
    engine: "Camry",
    type: "Manuel",
    fuelType: "Diesel",
    imgUrl: ModelToyota,
  },
  {
    modelName: "BMW 320",
    pricePerDay: 35,
    rating: 0,
    engine: "ModernLine",
    type: "Manuel",
    fuelType: "Diesel",
    imgUrl: ModelMBW,
  },
  {
    modelName: "Mercedes",
    pricePerDay: 50,
    rating: 0,
    engine: "Benz GLK",
    type: "Manuel",
    fuelType: "Diesel",
    imgUrl: ModelBenz,
  },
  {
    modelName: "VW Passat",
    pricePerDay: 25,
    rating: 0,
    engine: "CC",
    type: "Manuel",
    fuelType: "Diesel",
    imgUrl: ModelPassat,
  },
];

const Models = () => {
  return (
    <section className="py-28 flex flex-col items-center">
      {/* <img src={ModelAudi} alt="Audi" /> */}

      <div className="grid auto-cols-min grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px]">
        {carRentalInfo.map((carInfo) => (
          <div className="w-[348.5px]">
            <img src={carInfo.imgUrl} alt="Audi" className="h-[270px]" />

            <div className="p-6 border-2 border-gray-200 rounded-sm">
              <div className="flex flex-col gap-2 py-4">
                <div className="flex flex-row justify-between">
                  <h1 className="font-bold text-[28px] font-poppins">
                    {carInfo.modelName}
                  </h1>
                  <h1 className="font-bold text-[28px] font-poppins">
                    ${carInfo.pricePerDay}
                  </h1>
                </div>

                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-1">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <img
                        key={i}
                        src="/src/assets/icons/star-icon.svg"
                        alt="star-icon"
                      />
                    ))}
                  </div>
                  <p className="text-secondary-light font-poppins text-base">
                    per day
                  </p>
                </div>

                <div className="flex flex-row justify-between">
                  <span className="flex flex-row justify-start items-center gap-1 font-poppins text-lg text-secondary-light">
                    <img
                      src="/src/assets/icons/car-icon.svg"
                      alt="car-icon.svg"
                    />
                    {carInfo.engine}
                  </span>

                  <span className="flex flex-row-reverse justify-start items-center gap-1 font-poppins text-lg text-secondary-light">
                    <img
                      src="/src/assets/icons/car-icon.svg"
                      alt="car-icon.svg"
                    />
                    4/5
                  </span>
                </div>

                <div className="flex flex-row justify-between">
                  <span className="flex flex-row justify-start items-center gap-1 font-poppins text-lg text-secondary-light">
                    <img
                      src="/src/assets/icons/car-icon.svg"
                      alt="car-icon.svg"
                    />
                    {carInfo.type}
                  </span>

                  <span className="flex flex-row-reverse justify-start items-center gap-1 font-poppins text-lg text-secondary-light">
                    <img
                      src="/src/assets/icons/car-icon.svg"
                      alt="car-icon.svg"
                    />
                    {carInfo.fuelType}
                  </span>
                </div>
              </div>

              <hr className="py-4" />

              <button
                onClick={() => console.log("clicked")}
                className="py-4 font-rubik whitespace-nowrap font-[500] text-white  bg-primary w-full shadow-xl"
              >
                Book Ride
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Models;
