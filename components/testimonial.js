import { ImQuotesLeft } from "react-icons/im";

export default function Testimonial({ quote, profileIcon, name, role }) {
  return (
    <div>
      <div className="w-72 align-middle">
        <div>
          {/* <ImQuotesLeft size={90} /> */}
          <p className="italic text-center md:text-left">{quote}</p>
        </div>
        <div className="flex flex-row space-x-3">
          <img src={profileIcon} alt={name} className="rounded-full w-8 h-8" />
          <p className="text-base font-openSans font-semibold">
            {name}, <span className="font-normal">{role}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
