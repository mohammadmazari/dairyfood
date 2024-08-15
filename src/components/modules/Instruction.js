import React from "react";

function Instruction() {
  return (
    <div className=" container xl:max-w-screen-xl ">
      <p className="text-lg py-2 text-blue-400 font-bold lg:text-lg">
        How to order
      </p>
      <ul className="mt-2 text-gray-700 text-xs [&_li]:py-2 [&_li]:list-none [&_li]:list-inside [&_li]:before:w-5 [&_li]:before:h-5 [&_li]:before:bg-red ">
        <li>Sign in (or create an account) and set your delivery address.</li>
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
