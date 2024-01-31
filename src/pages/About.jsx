import guard from '../assets/guard.jpg'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div
      data-aos='fade-down'
      id="about"
      className="px-4 min-h-screen flex items-center justify-center gap-[64px] flex-col-reverse md:flex-row py-6 md:py-12 md:px-[100px] leading-[1.5]"
    >
      <div className="md:w-[500px] shadow-lg border-t-4 shadow-orange-50 relative rounded-full object-cover object-center">
        <div
          aria-hidden="true"
          className="absolute w-full h-full rounded-full bg-gradient-to-r inset-0 top-2 from-white via-gray-400 to-white shadow-lg shadow-white/50"
        ></div>
        <img className="rounded-full z-[10] relative" src={guard} alt="" />
      </div>

      <div className="md:w-1/2 text-center md:text-start">
        <h1 className="mb-[16px] font-bold capitalize md:text-[38px] text-[32px]">
          Securing Tomorrow, Today: Discover Frontline Integrated Security
        </h1>
        <h4 className="text-[18px] mb-[32px]">
          Frontline Integrated Security is your trusted partner in safeguarding
          what matters most. As a leading security agency in Canada, we
          specialize in providing tailored and comprehensive security solutions.
          Our team of highly trained professionals, equipped with cutting-edge
          technology, ensures 24/7 protection for individuals, businesses, and
          assets.{" "}
        </h4>

        <button className="border-2 py-[8px] bg-accent/90 shadow-inner shadow-red-800/80 border-accent capitalize rounded-[12px] hover:scale-110 hover:duration-300 hover:-translate-y-1 px-[32px]">
          <NavLink>get a free quote today</NavLink>
        </button>
      </div>
    </div>
  );
}

export default About