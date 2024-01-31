import { NavLink } from "react-router-dom";
import guard from '../assets/guard.jpg'
import guard2 from '../assets/guard2.jpg'
import guard3 from '../assets/contact.jpg'


const Home = () => {
  return (
    <div
      data-aos="fade-down"
      id="home"
      className="px-4 gap-[64px] py-6 md:py-12 md:px-[100px] leading-[1.5] flex items-center justify-center flex-col md:flex-row"
    >
      <section className="md:w-1/2 text-center md:text-start">
        <p className="mb-[16px] font-semibold uppercase text-accent">
          we provide
        </p>

        <h1 className="mb-[16px] font-bold capitalize md:text-[64px] text-[50px] ">
          professional security services
        </h1>

        <h4 className="text-[18px] mb-[32px] md:max-w-[600px]">
          Your trusted partner for professional, affordable, and cutting-edge
          security solutions, ensuring safety with expertise.
        </h4>

        <button className="border-2 bg-accent/90 shadow-inner shadow-red-800/80 border-accent py-[8px] capitalize rounded-[12px] hover:scale-110 hover:duration-300 hover:-translate-y-1 px-[32px]">
          <NavLink>contact us</NavLink>
        </button>
      </section>

      <main className="md:w-1/2 grid md:grid-cols-2 md:grid-rows-2 grid-rows-1 gap-[32px] md:gap-[64px] items-center justify-center grid-cols-1">
        <div className="rounded-t-[100px] row-span-2 w-[300px] h-[300px] z-[2] rounded-b-[100px] overflow-hidden border-y-2 border-t-white/80 shadow-md shadow-white/50 ">
          <img className="w-full" src={guard} alt="" />
        </div>

        <div className="rounded-t-[100px] w-[300px] h-[300px] z-[2] object-center object-cover rounded-b-[100px] overflow-hidden border-y-2 border-t-white/80 shadow-md shadow-white/50 ">
          <img className="w-full" src={guard2} alt="" />
        </div>

        <div className="rounded-t-[100px] w-[300px] hidden md:block h-[300px] z-[2] object-cover object-center rounded-b-[100px] overflow-hidden border-y-2 border-t-white/80 shadow-md shadow-white/50 ">
          <img className="w-full " src={guard3} alt="" />
        </div>
      </main>
    </div>
  );
}

export default Home