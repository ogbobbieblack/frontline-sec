
import guard from '../assets/guard.jpg'
import guard2 from '../assets/guard2.jpg'
import guard3 from '../assets/guard3.jpg'
import guard4 from '../assets/guard4.jpg'
import guard5 from '../assets/guard5.jpg'
import guard6 from '../assets/guard6.jpg'


const Services = () => {
  return (
    <div
      data-aos="fade-down"
      id="services"
      className="px-4 py-6 md:py-12 md:px-[100px]"
    >
      <h1 className="mb-[16px] font-bold text-center capitalize md:text-[38px] text-[32px]">
        Elevate Your Security: Our Comprehensive Services
      </h1>

      <div className="grid md:grid-cols-3  items-center md:gap-[32px] justify-center">
        <div className="flex text-center md:text-start px-4 py-8 gap-4 flex-col justify-center ">
          <img
            src={guard}
            className="rounded-full w-[50px] mx-auto md:mx-0 border-2 h-[50px]"
            alt=""
          />
          <h3 className="capitalize text-text text-[24px] font-semibold">
            fire watch
          </h3>
          <p className="max-w-[500px] text-[16px]">
            Frontline Integrated Security excels in providing specialized fire
            watch services, ensuring the utmost safety in
          </p>
        </div>

        <div className="flex text-center md:text-start px-4 py-8 gap-4 flex-col justify-center ">
          <img
            src={guard2}
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
            src={guard3}
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
            src={guard4}
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
            src={guard5}
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
            src={guard6}
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