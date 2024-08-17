import DetailsPage from "@/components/modules/DetailsPage";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

function Details({ data }) {
  const router = useRouter();
  if (router.isFallback) return <p>Loading...</p>;
  return <DetailsPage data={data} />;
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 10);
  
  if(data.length < 1 ){
    return {
      notFound:true
    }
  }
  const paths = data.map((food) => ({
    params: { id: food.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  try {
    const {
      params: { id },
    } = context;
    const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
    const data = await res.json();

    if (!data.id) {
      return {
        notFound: true,
      };
    }

    return {
      props: { data },
      revalidate: +process.env.REVALIDATE,
    };
  } catch (error) {
    return {
      props: { data: [] },
    };
  }
}

export default Details;
