import Head from "next/head";
import React, { useEffect } from "react";
import Checkout from "../components/products/Checkout";
import ProductDetail from "../components/products/ProductDetail";
import Products from "../components/products/Products";
import ShoppingCart from "../components/products/ShoppingCart";

import PoloLayout from "./../polo/pololayout/PoloLayout";
import productService from "../services/ProductService";
import AddNewProduct from "../components/products/AddNewProduct";
import OneProduct from "../components/products/OneProduct";
export default function HomePage({ productsData }) {
  // const getProducts = async () => {
  //   const products = await productService.getAllProducts();
  //   console.log("Products: ", products);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);
  return (
    <div>
      <PoloLayout>
        <Products productsData={productsData} />
        {/* <AddNewProduct /> */}
        {/* <OneProduct /> */}
      </PoloLayout>
    </div>
  );
}

export const getServerSideProps = async function () {
  const productsData = await productService.getAllProducts();

  console.log("PRODUCTS: ", productsData);
  return { props: { productsData } };
};

{
  /* <ProductDetail
          category="Women"
          title="Bolt SweatShirt"
          price="20"
          description=" Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae."
        /> */
}
{
  /* <ShoppingCart /> */
}
{
  /* <Checkout /> */
}
{
  /* <AddNewProduct /> */
}
