import React from "react";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";

function Attributs() {
  return (
    <div className="container xl:max-w-screen-xl">
      <p className="text-lg py-2 text-blue-400 font-bold">Why us?</p>
      <div className="flex gap-5 [&_p]:w-[45%] [&_p]:text-gray-700 [&_p]:text-xs [&_p]:flex [&_p]:justify-center md:flex-nowrap md:mt-5 md:[&_p]:text-md lg:[&_p]:text-lg [&_p]:flex-col [&_p]:items-center [&_p]:gap-5 [&_p]:p-10 [&_p]:rounded-md [&_p]:shadow-xl justify-center  flex-wrap">
        <p>
          <Fast />
          <span>Fast</span>
        </p>
        <p>
          <Food />
          <span>Best Restaurants</span>
        </p>
        <p>
          <Choice />
          <sapn>Your Choice</sapn>
        </p>
        <p>
          <Clock />
          <sapn>24-7</sapn>
        </p>
      </div>
    </div>
  );
}

export default Attributs;
