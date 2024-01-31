import Marquee from "react-fast-marquee"
import { Ri24HoursFill } from "react-icons/ri";
import { GiCctvCamera } from "react-icons/gi";
import { GrCertificate, GrUserExpert } from "react-icons/gr";

const Review = () => {
  return (
    <div
      data-aos="fade-down"
      className=" py-6 md:py-12 leading-[1.5] text-text"
    >
      <p className="capitalize text-center text-[20px] mb-[32px] md:px-[100px] px-4">
        we guarantee:
      </p>
      <Marquee speed={70}>
        <div className="flex items-center justify-between gap-12">
          <div className="text-2xl font-bold border-l-2 px-6 flex items-center justify-center gap-6">
            <Ri24HoursFill className="text-[80px] text-accent" />
            <h4 className="capitalize">24/7 customer support</h4>
          </div>
          <div className="text-2xl font-bold border-l-2 px-6 flex items-center justify-center gap-6">
            <GiCctvCamera className="text-[80px] text-accent" />
            <h4 className="capitalize">latest equipment</h4>
          </div>
          <div className="text-2xl font-bold border-l-2 px-6 flex items-center justify-center gap-6">
            <GrCertificate className="text-[80px] text-accent" />
            <h4 className="capitalize">certified security professionals</h4>
          </div>
          <div className="text-2xl font-bold border-l-2 px-6 flex items-center justify-center gap-6">
            <GrUserExpert className="text-[80px]  text-accent" />
            <h4 className="capitalize">5+ years experience</h4>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Review