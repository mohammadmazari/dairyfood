import MenuPage from "@/components/template/Menupage";
import React from "react";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: [] },
    };
  }
}

export default Menu;
