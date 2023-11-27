const PlanYourTrip = () => {
  return (
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
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanYourTrip;
