import { useState } from "react"
import {FaBars, FaTimes} from 'react-icons/fa'
import { NavLink } from "react-router-dom"
import logo from '../assets/logo.webp'


const Nav = () => {
    const [mobile, setMobile] = useState(false)
    const links = ['home', 'about', 'services', 'contact']

  return (
    <nav
      data-aos="fade-down"
      className="capitalize z-[4] flex items-center relative justify-between w-full py-[48px] px-[12px] md:px-[48px]"
    >
      <NavLink className="items-center z-[4] justify-center gap-[6px] font-bold uppercase flex ">
        <img className="w-12" src={logo} alt="" />
        <span className="text-sm">frontline security</span>
      </NavLink>
      <button
        className="md:hidden z-[4] text-inherit text-3xl"
        onClick={() => setMobile(!mobile)}
      >
        {!mobile ? <FaBars /> : <FaTimes />}
      </button>

      <div className="hidden md:flex items-center justify-between gap-[16px] ">
        {links.map((link, el) => {
          return (
            <a
              className="hover:scale-110 hover:duration-150 transition-all hover:-translate-y-1 hover:border-b-2 hover:py-2 "
              key={link + el}
              href={`#${link}`}
            >
              {link}
            </a>
          );
        })}
      </div>

      {mobile && (
        <div
          data-aos="fade-down"
          className=" md:hidden bg-[#071f2c] flex flex-col w-full inset-0 absolute h-[500px] items-start px-[24px] justify-center gap-[32px] "
        >
          {links.map((link, el) => {
            return (
              <a
                className=" transition-all hover:-translate-y-1 border-b-2 w-full pb-2"
                key={link + el}
                href={`#${link}`}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Nav