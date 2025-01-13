"use client";
import React, { useState } from "react";
import Image from "next/image";
import funnel from "@/Image/Funnel.svg";
import search from "@/Image/Search.svg";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Select() {
  // States for dropdown values
  const [selectedNumber, setSelectedNumber] = useState("10");
  const [selectedState, setSelectedState] = useState("Select");

  // States to manage dropdown visibility
  const [isNumberDropdownOpen, setNumberDropdownOpen] = useState(false);
  const [isStateDropdownOpen, setStateDropdownOpen] = useState(false);

  return (
    <>
      <div className="border-b border-b-[#F1E5D1] flex justify-between items-center">
        {/* Desktop View */}
        <div className="hidden md:flex justify-between w-full">
          {/* Left Side */}
          <div className="flex">
            {/* Number Dropdown */}
            <div className="pl-2 pr-2 py-3 relative">
              <button
                className="text-sm font-medium flex justify-center items-center"
                onClick={() => setNumberDropdownOpen(!isNumberDropdownOpen)}
              >
                {selectedNumber}
                <ChevronDownIcon
                  className={`ml-3 h-4 w-4 transition-transform ${
                    isNumberDropdownOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {isNumberDropdownOpen && (
                <div className="absolute bg-white shadow-md p-2 border rounded mt-1">
                  {[...Array(10)].map((_, index) => (
                    <p
                      key={index + 1}
                      className="cursor-pointer hover:bg-gray-200 px-2 py-1"
                      onClick={() => {
                        setSelectedNumber((index + 1).toString());
                        setNumberDropdownOpen(false);
                      }}
                    >
                      {index + 1}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* State Dropdown */}
            <div className="border border-[#F1E5D1] relative">
              <button
                className="flex justify-between pl-2 pr-2 items-center py-2"
                onClick={() => setStateDropdownOpen(!isStateDropdownOpen)}
              >
                {selectedState}
                <ChevronDownIcon
                  className={`ml-20 h-4 w-4 transition-transform ${
                    isStateDropdownOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {isStateDropdownOpen && (
                <div className="absolute bg-white shadow-md p-2 border rounded mt-1">
                  {["State 1", "State 2", "State 3", "State 4", "State 5"].map(
                    (state, index) => (
                      <p
                        key={index}
                        className="cursor-pointer hover:bg-gray-200 px-2 py-1"
                        onClick={() => {
                          setSelectedState(state);
                          setStateDropdownOpen(false);
                        }}
                      >
                        {state}
                      </p>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex">
            <div className="border border-[#F1E5D1] flex items-center pr-60 pl-2 gap-3 text-xs font-normal">
              <Image src={search} alt="Search Icon" /> Search...
            </div>
            <div className="px-2 py-2 flex items-center">
              <Image src={funnel} alt="Funnel Icon"></Image>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden p-3 w-full border border-[#F1E5D1] items-center gap-3 pl-2 pr-3 text-xs font-normal">
          <Image src={search} alt="Search Icon" /> Search...
        </div>
      </div>
    </>
  );
}

export default Select;
