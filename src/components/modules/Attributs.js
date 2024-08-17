import React from "react";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";

function Attributs() {
  return (
    <div className="container xl:max-w-screen-xl">
      <p className="text-lg py-2 text-blue-400 font-bold lg:text-lg">Why us?</p>
      <div>
        <div className="flex gap-5 [&_div]:w-[45%] [&_div]:text-gray-700 [&_div]:text-xs [&_div]:flex [&_div]:justify-center md:flex-nowrap md:mt-5 md:[&_div]:text-md lg:[&_div]:text-lg [&_div]:flex-col [&_div]:items-center [&_div]:gap-5 [&_div]:p-10 [&_div]:rounded-md [&_div]:shadow-xl justify-center  flex-wrap">
          <div data-aos="flip-left">
            <Fast />
            <span>Fast</span>
          </div>
          <div data-aos="flip-left">
            <Food />
            <span>Best Restaurants</span>
          </div>
          <div data-aos="flip-right">
            <Choice />
            <span>Your Choice</span>
          </div>
          <div data-aos="flip-right">
            <Clock />
            <span>24-7</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attributs;
