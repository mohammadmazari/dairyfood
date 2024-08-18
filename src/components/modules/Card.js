import React from "react";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import Link from "next/link";

function Card({ data }) {
  const { id, name, price, details, discount } = data;
  return (
    <div data-aos="zoom-in" className="shadow-xl rounded-xl p-3 border flex flex-col gap-6 w-full h-[480px] text-[var(--ColorText)] sm:w-[45%] md:w-[30%]">
      <div>
        <img src={`/images/${id}.jpeg`} alt={name}/>
      </div>
      <div>
        <div className="flex justify-between py-3">
          <p className="text-[var(--BaceColor)]">{name}</p>
          <p className="flex gap-2 items-center">
            <Location />
            {details[0].Cuisine}
          </p>
        </div>
        <p className="flex gap-1 text-red-500 py-4">
            <Dollar/>
            {price}<span>$</span>
        </p>
        <Link href={`/menu/${id}`} className="mt-5 block text-center w-full bg-[var(--BaceColor)] text-white rounded-sm p-3 ">See Details</Link>
      </div>
    </div>
  );
}

export default Card;
