import Head from "next/head";
import React, { useEffect } from "react";
import _ from "lodash";
import TestDatatable from "../../../components/TestDatatable";
import productService from "../../../services/ProductService";
import PoloLayout from "../../../polo/pololayout/PoloLayout";

export default function index({ sendData }) {
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
        {/* <Products sendData={sendData} /> */}
        <TestDatatable sendData={sendData} />
        {/* <AddNewProduct /> */}
        {/* <OneProduct /> */}
      </PoloLayout>
    </div>
  );
}

export const getServerSideProps = async function (context) {
  const sendData = await productService.getAllProducts();

  console.log("sendData: ", sendData);
  return { props: { sendData } };
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
