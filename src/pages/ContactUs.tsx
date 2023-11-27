// import contactBackground from "/src/assets/bg-contact.c178c6db0f988d408d94.png";
// import "./contactus.module.css";

const ContactUs = () => {
  return (
    <section className="contact-us-div">
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center max-w-[1280px] gap-4">
        <div className="max-w-[605px] w-full">
          <h2 className="text-center md:text-start text-[42px] font-poppins font-bold md:max-w-[410px]">
            Need additional information?
          </h2>

          <p className="text-center md:text-start font-rubik text-base text-secondary-light py-6  md:max-w-[410px]">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>

          <ul className="flex flex-col gap-4">
            <li className="flex flex-row-reverse justify-center md:justify-end gap-2 items-center">
              <a href="tel:123456789"> (123) -456-789</a>
              <img
                src="/src/assets/icons/phone-icon.svg"
                alt="phone-icon.svg"
                width={24}
                height={24}
              />
            </li>

            <li className="flex flex-row-reverse justify-center md:justify-end gap-2 items-center">
              <a href="mailto:carrental@gmail.com">carrental@gmail.com</a>
              <img
                src="/src/assets/icons/email-icon.svg"
                alt="email-icon.svg"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </div>

        <div className="max-w-[605px] w-full">
          <div className="py-2">
            <label
              htmlFor="name"
              className="text-center md:text-start block py-2 text-base font-poppins font-semibold"
            >
              Full Name <span className="text-primary">*</span>
            </label>

            <input
              type="text"
              id="name"
              className="block w-full px-10 py-5 outline-none bg-secondary-extra-light text-secondary-light"
              placeholder="Eg. Joe Smith"
            />
          </div>

          <div className="py-2">
            <label
              htmlFor="email"
              className="text-center md:text-start block py-2 text-base font-poppins font-semibold"
            >
              Email <span className="text-primary">*</span>
            </label>

            <input
              type="text"
              id="email"
              className="block w-full px-10 py-5 outline-none bg-secondary-extra-light text-secondary-light"
              placeholder="youremail@example.com"
            />
          </div>

          <div className="py-2">
            <label
              htmlFor="desc"
              className="text-center md:text-start block py-2 text-base font-poppins font-semibold"
            >
              Tell us about it <span className="text-primary">*</span>
            </label>

            <textarea
              id="desc"
              rows={5}
              className="block w-full px-10 py-5 outline-none bg-secondary-extra-light text-secondary-light"
              placeholder="Write here..."
            />
          </div>

          <button className="py-4 font-rubik whitespace-nowrap font-[500] text-white text-lg bg-primary shadow-lg w-full flex flex-row justify-center items-center gap-5">
            <img src="/src/assets/icons/message.svg" alt="message.svg" /> Send
            Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
