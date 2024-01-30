import {  FaTelegramPlane } from "react-icons/fa";


const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen px-4 flex flex-col md:flex-row gap-[96px] py-6 md:py-12 md:px-[100px]"
    >
      <div className="flex flex-col items-start justify-start">
        <h3 className="mb-[16px] font-bold capitalize md:text-[38px] text-[32px]">
          Let’s Discuss Your Security Options
        </h3>

        <p className="max-w-[600px] mb-[32px] text-[18px]">
          Want to hear more about Frontline Security’s services? If you have any
          questions about our services, or how Frontline Security can help
          protect your business, don’t hesitate to contact us.
        </p>

        <form className="flex flex-col gap-8 w-full">
          <input
            type="text"
            id="name"
            autoComplete="given-name"
            placeholder="enter your name"
            className="bg-inherit border-b-2 py-2 placeholder:capitalize px-4 outline-none "
          />
          <input
            type="email"
            id="email"
            autoComplete="email"
            placeholder="enter your email address"
            className="bg-inherit border-b-2 py-2 placeholder:capitalize px-4 outline-none "
          />
          <input
            type="number"
            id="tel"
            autoComplete="tel"
            placeholder="Enter your phone number"
            className="bg-inherit border-b-2 py-2 placeholder:capitalize px-4 outline-none "
          />
          <textarea
            type="text"
            cols={10}
            rows={10}
            id="message"
            autoComplete="message"
            placeholder="Enter your message"
            className="bg-inherit border-2 py-2 placeholder:capitalize px-4 outline-none "
          />
          <button className="border-2 bg-accent/90 shadow-inner shadow-red-800/80 border-accent flex flex-row-reverse items-center justify-center gap-2 py-[8px] capitalize rounded-[12px] hover:scale-110 hover:duration-300 hover:-translate-y-1 px-[32px]">
            send
            <FaTelegramPlane className="text-3xl" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact