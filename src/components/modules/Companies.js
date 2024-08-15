import React from "react";
import Apple from "../icons/Apple";
import Tesla from "../icons/Tesla";
import SpaceX from "../icons/SpaceX";
import Binance from "../icons/Binance";

function Companies() {
  return (
    <div className=" container xl:max-w-screen-xl mt-14 flex gap-2  [&_p]:max-w-[100px] items-center justify-between">
      
        <Apple />
    
        <Tesla />
     
        <SpaceX />
      
        <Binance />
   
    </div>
  );
}

export default Companies;
