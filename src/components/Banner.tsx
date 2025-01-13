// "use client";
// import React, { useState } from "react";
import React from "react";

function Banner() {
  // State for managing dropdowns
  // const [openDropdown, setOpenDropdown] = useState("");

  // Function to toggle specific dropdown
  // const toggleDropdown = (dropdown: string) => {
  //   setOpenDropdown(openDropdown === dropdown ? "" : dropdown);
  // };

  return (
    <>
      {/* <!-- Navigation Links --> */}
      <div className="lg:flex items-center lg:space-x-2 relative bg-[#fff] border-b  border-b-[#F1E5D1] ">
        {/* <!-- Dashboard Dropdown --> */}
        <div className="relative hover:text-white hover:bg-[#CFA767] px-4 py-[5px] ">
          <button className="text-[#333333] uppercase font-semibold text-xs  hover:text-white">
            Banner
          </button>
        </div>

        <div className="relative hover:text-white hover:bg-[#CFA767] px-4 py-[5px] ">
          <button className="text-[#333333] uppercase font-semibold text-xs  hover:text-white">
            Partners
          </button>
        </div>

        <div className="relative hover:text-white hover:bg-[#CFA767] px-4 py-[5px] ">
          <button className="text-[#333333] uppercase font-semibold text-xs  hover:text-white">
            testimonials
          </button>
        </div>

        <div className="relative hover:text-white hover:bg-[#CFA767] px-4 py-[5px] ">
          <button className="text-[#333333] uppercase font-semibold text-xs  hover:text-white">
            Newsletter
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
