import React from "react";
import Card from "../modules/Card";
function MenuPage({ data }) {
  return (
    <div className=" container xl:max-w-screen-xl py-20">
      
      <h1 className="text-blue-400 text-lg border-b-4 font-bold mb-7 border-blue-400 pb-1 inline-block">
        Menu
      </h1>
      <div className="flex flex-wrap gap-5 justify-between md:px-20">
        {data.length > 1 ? (
          data.map((item) => <Card key={item.id} data={item} />)
        ) : (
          <p>error</p>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
