import logo from '../assets/logo.webp'

const Services = () => {
  return (
    <div id="services" className="px-4 py-6 md:py-12 md:px-[100px]">
      <h1 className="mb-[16px] font-bold text-center capitalize md:text-[38px] text-[32px]">
        Elevate Your Security: Our Comprehensive Services
      </h1>

      <div className="grid md:grid-cols-3  items-center md:gap-[32px] justify-center">
        <div className="flex text-center md:text-start px-4 py-8 gap-4 flex-col justify-center ">
          <img
            src={logo}
            className="rounded-full w-[50px] mx-auto md:mx-0 border-2 h-[50px]"
            alt=""
          />
          <h3 className="capitalize text-text text-[24px] font-semibold">fire watch</h3>
          <p className="max-w-[500px] text-[16px]">
            Frontline Integrated Security excels in providing specialized fire
            watch services, ensuring the utmost safety in
          </p>
        </div>

        <div className="flex text-center md:text-start px-4 py-8 gap-4 flex-col justify-center ">
          <img
            src={logo}
            className="rounded-full w-[50px] mx-auto md:mx-0 border-2 h-[50px]"
            alt=""
          />
          <h3 className="capitalize text-text text-[24px] font-semibold">
            concierge services
          </h3>
          <p className="max-w-[500px] text-[16px]">
            Frontline Security, our Concierge Service goes beyond expectations.
            Our professional and courteous concierge team delivers
          </p>
        </div>

        <div className="flex  text-center md:text-start px-4 py-8 gap-4 flex-col justify-center ">
          <img
            src={logo}
            className="rounded-full w-[50px] mx-auto md:mx-0 border-2 h-[50px]"
            alt=""
          />
          <h3 className="capitalize text-text text-[24px] font-semibold">
            camera monitoring
          </h3>
          <p className="max-w-[500px] text-[16px]">
            Elevate your security with Frontline Security’s unmatched security
            camera monitoring services. Our highly trained professionals.
          </p>
        </div>

        <div className="flex  text-center md:text-start px-4 py-8 gap-4 flex-col justify-center ">
          <img
            src={logo}
            className="rounded-full w-[50px] mx-auto md:mx-0 border-2 h-[50px]"
            alt=""
          />
          <h3 className="capitalize text-text text-[24px] font-semibold">
            mobile patrol
          </h3>
          <p className="max-w-[500px] text-[16px]">
            Frontline Security offers exceptional mobile patrol security
            services, providing a vigilant and
          </p>
        </div>

        <div className="flex text-center md:text-start px-4 py-8 gap-4 flex-col justify-center ">
          <img
            src={logo}
            className="rounded-full w-[50px] mx-auto md:mx-0 border-2 h-[50px]"
            alt=""
          />
          <h3 className="capitalize text-text text-[24px] font-semibold">
            event security
          </h3>
          <p className="max-w-[500px] text-[16px]">
            Frontline Integrated Security ensures seamless event security,
            blending expertise and professionalism for a worry-free experience.
          </p>
        </div>

        <div className="flex text-center md:text-start px-4 py-8 gap-4 flex-col justify-center ">
          <img
            src={logo}
            className="rounded-full w-[50px] mx-auto md:mx-0 border-2 h-[50px]"
            alt=""
          />
          <h3 className="capitalize text-text text-[24px] font-semibold">
            security service
          </h3>
          <p className="max-w-[500px] text-[16px]">
            On Site Security Guard Previous Next Comprehensive security
            solutions tailored to your needs, ensuring peace
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services