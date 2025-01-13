"use client";
// import React, { useState } from "react";

import React from "react";

// pages/index.js
export default function HomePage() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border border-b-[#F1E5D1] ">
      {/* Left Section */}
      <div className="text-gray-800">
        <h1 className="text-base font-semibold text-[#333333]">HOME PAGE</h1>
        <p className="text-sm text-[#333333]">
          Web / Home Page / <span className="text-[#CFA767]">Banner </span>
        </p>
      </div>
      {/* Right Section */}
      <button className="flex items-center gap-2 px-2 py-1 bg-[#CFA767] text-white rounded ">
        <span className="text-lg font-bold">+</span>
        <span className="font-extrabold text-sm">ADD</span>
      </button>
    </div>
  );
}
