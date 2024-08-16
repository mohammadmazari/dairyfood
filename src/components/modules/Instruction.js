import React from "react";

function Instruction() {
  return (
    <div className=" container xl:max-w-screen-xl ">
      <p className="text-lg py-2 text-blue-400 font-bold lg:text-lg">
        How to order?
      </p>
      <ul data-aos="fade-up-right" className="mt-2 text-gray-700 text-xs lg:[&_li]:text-sm [&_li]:py-2 [&_li]:list-none [&_li]:list-inside [&_li]:before:w-1 [&_li]:before:h-1 [&_li]:before:absolute [&_li]:relative [&_li]:before:bg-green-600 [&_li]:ps-2 [&_li]:before:-left-1 [&_li]:before:rounded-full [&_li]:before:top-2/4">
        <li >Sign in (or create an account) and set your delivery address.</li>
        <li>Choose the restaurant you want to order from.</li>
        <li>Select your items and tap “Add to Cart”.</li>
        <li>To place your order, select “View cart” or “Checkout”.</li>
        <li>Review your order and tap “Place Order”...</li>
        <li>Track your order progress.</li>
      </ul>
    </div>
  );
}

export default Instruction;
