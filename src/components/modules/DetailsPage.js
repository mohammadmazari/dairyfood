import React from "react";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
function DetailsPage({ data }) {
  console.log(data);
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = data;
  return (
    <div className=" container xl:max-w-screen-xl py-20 ">
      <h1 className="text-[var(--BaceColor)] font-bold text-lg border-b-4 inline-block pb-2 border-[var(--BaceColor)]">
        Details
      </h1>
      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:w-[650px] sm:gap-10 sm:items-center ">
        <div className=" rounded-xl overflow-hidden sm:w-[400px]">
          <img src={`/images/${id}.jpeg`} />
        </div>
        <div className="text-[var(--ColorText)] flex flex-col gap-8 px-3">
          <p className="text-[var(--BaceColor)] font-bold text-sm sm:text-lg">
            {name}
          </p>
          <p className="flex gap-2 items-center sm:text-md">
            <Location />
            {details[0].Cuisine}
          </p>
          <p className="flex ">
            <Dollar />
            {price}
            <span className="mx-1">$</span>
          </p>

          {discount ? (
            <p className="w-full bg-[var(--BaceColor)] rounded-md p-3 text-center text-white text-lg sm:w-[200px]">
              {Math.round((price * (100 - discount)) / discount)}
              <span className="ms-1">OF</span>
            </p>
          ) : (
            <p>
              {price}
              <span className="ms-1">$</span>
            </p>
          )}
        </div>
      </div>
      <div className="mt-10 text-[var(ColorText)] text-sm sm:text-md">
        <p>{introduction}</p>
      </div>
      <div className=" mt-10">
        <p className="text-lg text-[var(--BaceColor)] inline-block font-bold pb-1 border-b-4 border-[var(--BaceColor)] ">
          Details
        </p>
        <ul className="mt-6 [&_li]:py-2 [&_li]:list-none [&_li]:list-inside [&_li]:before:w-1 [&_li]:before:h-1 [&_li]:before:absolute [&_li]:relative [&_li]:before:bg-green-600 [&_li]:ps-2 [&_li]:before:-left-1 [&_li]:before:rounded-full [&_li]:before:top-2/4">
          {details.map((item, index) => (
            <li
              className="flex gap-3 text-sm text-[var(--ColorText)] mt-1"
              key={index}
            >
              <p>{Object.keys(item)[0]}</p>:
              <span className=" opacity-80">{Object.values(item)[0]}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className=" mt-10">
        <p className="text-lg text-[var(--BaceColor)] inline-block font-bold pb-1 border-b-4 border-[var(--BaceColor)] ">
          Details
        </p>
        <ul className="mt-6 [&_li]:py-2 [&_li]:list-none [&_li]:list-inside [&_li]:before:w-1 [&_li]:before:h-1 [&_li]:before:absolute [&_li]:relative [&_li]:before:bg-green-600 [&_li]:ps-2 [&_li]:before:-left-1 [&_li]:before:rounded-full [&_li]:before:top-2/4">
          {ingredients.map((item, index) => (
            <li
              className="flex gap-3 text-sm text-[var(--ColorText)] mt-1"
              key={index}
            >
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 pb-10">
        <p className="text-lg text-[var(--BaceColor)] inline-block font-bold pb-1 border-b-4 border-[var(--BaceColor)]">
          Recipe
        </p>
        <ul className="mt-4 text-[var(--ColorText)]">
          {recipe.map((item, index) => (
            <li className={`flex gap-5 mt-2 ${index % 2 ? 'bg-green-300' : 'bg-green-100'} p-3 text-xs`} key={index}>
              <span className="flex items-center text-lg">{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailsPage;
