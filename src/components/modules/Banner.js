import React from "react";

function Banner() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex gap-10 justify-start flex-col-reverse md:flex md:justify-between md:items-center text-gray-650 sm:flex-row h-fit  py-10   ">
        <div>
          <h1 className="border-b-4 inline-block pb-3 mb-5 border-blue-400 text-lg font-bold text-gray-700">Dariyshop</h1>
          <h4 className="text-sm mb-2"> Food Delivery and Takeout!</h4>
          <p className="font-normal text-xs md:text-md">
            dariyshop is an online food ordering and delivery platform launched
            by Uber in 2014. Meals are delivered by couriers using cars,
            scooters, bikes, or on foot.
          </p>
          <button className="mt-10 text-sm md:text-xl bg-blue-400 p-2 md:p-5 rounded-md md:rounded-xl text-white font-bold w-20 md:w-40 ">See All</button>
        </div>
        <div className="h-[450px] bg-[url('/images/banner.png')] bg-contain bg-center bg-no-repeat bg-fixed md:bg-none" >
          <figure className=" hidden md:inline-block">
            <img className="  w-[100%] " src="/images/banner.png"></img>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Banner;
