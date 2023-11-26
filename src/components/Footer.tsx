export const Footer = () => {
  return (
    <section className="relative px-6 2xl:px-28 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="col-span-4 sm:col-span-1 lg:col-span-1">
          <ul>
            <li className="text-center sm:text-start text-2xl font-poppins">
              <span className="font-semibold uppercase">Car</span> Rental
            </li>

            <li className="text-center sm:text-start py-6">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>

            <li className="flex flex-row-reverse justify-center sm:justify-end gap-2 items-center">
              <a href="tel:123456789"> (123) -456-789</a>
              <img
                src="/src/assets/icons/phone-icon.svg"
                alt="phone-icon.svg"
                width={24}
                height={24}
              />
            </li>

            <li className="flex flex-row-reverse justify-center sm:justify-end gap-2 items-center">
              <a href="mailto:carrental@gmail.com">carrental@gmail.com</a>
              <img
                src="/src/assets/icons/email-icon.svg"
                alt="email-icon.svg"
                width={24}
                height={24}
              />
            </li>
            <li></li>
          </ul>
        </div>

        <div className="col-span-4 sm:col-span-1 lg:col-span-1">
          <ul className="flex flex-col gap-2">
            <li className="text-center sm:text-start text-2xl font-poppins font-semibold uppercase">
              Company
            </li>

            <li className="text-center sm:text-start hover:text-primary transition duration-200 ease-in-out text-base font-poppins">
              <a href="#">New York</a>
            </li>

            <li className="text-center sm:text-start hover:text-primary transition duration-200 ease-in-out text-base font-poppins">
              <a href="#">Careers</a>
            </li>

            <li className="text-center sm:text-start hover:text-primary transition duration-200 ease-in-out text-base font-poppins">
              <a href="#">Mobile</a>
            </li>

            <li className="text-center sm:text-start hover:text-primary transition duration-200 ease-in-out text-base font-poppins">
              <a href="#">Blog</a>
            </li>

            <li className="text-center sm:text-start hover:text-primary transition duration-200 ease-in-out text-base font-poppins">
              <a href="#">How we work</a>
            </li>
          </ul>
        </div>

        <div className="col-span-4 sm:col-span-1 lg:col-span-1">
          <ul className="flex flex-col gap-2">
            <li className="text-center sm:text-start text-2xl font-poppins font-semibold uppercase">
              Working Hours
            </li>

            <li className="text-center sm:text-start text-base font-poppins">
              Mon - Fri: 9:00AM - 9:00PM
            </li>
            <li className="text-center sm:text-start text-base font-poppins">
              Sat: 9:00AM - 19:00PM
            </li>
            <li className="text-center sm:text-start text-base font-poppins">
              Sun: Closed
            </li>
          </ul>
        </div>

        <div className="col-span-4 sm:col-span-1 lg:col-span-1">
          <ul className="footer-content__2">
            <li className="text-center sm:text-start text-2xl font-poppins font-semibold uppercase">
              Subscription
            </li>

            <li className="py-6">
              <p className="text-center sm:text-start text-base font-poppins">
                Subscribe your Email address for latest news &amp; updates.
              </p>
            </li>

            <li>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="bg-secondary-extra-light px-16 py-3 w-full font-rubik text-sm outline-none"
              />
            </li>

            <li className="py-2">
              <button className="py-4 font-rubik whitespace-nowrap font-[500] text-white  bg-primary shadow-lg w-full">
                Submit
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
