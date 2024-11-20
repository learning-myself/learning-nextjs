import { Suspense } from "react";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function getData() {
  // const res = await fetch(
  //   "https://5cc2bf77968a0b001496d996.mockapi.io/api/products"
  // );
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // if (!res) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }
  // return res.json();
  let data = 1000;
  await delay(5000);
  return data;
}

const Product = async () => {
  const data = await getData();
  return <div>This is product {data}</div>;
};

export default Product;
