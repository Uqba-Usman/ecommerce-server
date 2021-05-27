import React, { useEffect } from "react";

import Products from "../components/products/Products";

import PoloLayout from "./../polo/pololayout/PoloLayout";
import productService from "../services/ProductService";

import _ from "lodash";

export default function HomePage({ sendData }) {
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
        <Products sendData={sendData} />
        {/* <ExportData /> */}
        {/* <TestDatatable sendData={sendData} /> */}
        {/* <AddNewProduct /> */}
        {/* <OneProduct /> */}
      </PoloLayout>
    </div>
  );
}

export const getServerSideProps = async function (context) {
  const productsData = await productService.getAllProducts();

  function paginate(items, pageNumber, pageSize) {
    console.log("PAGINATE", items, pageNumber, pageSize);
    const startIndex = (pageNumber - 1) * pageSize;

    return _(items).slice(startIndex).take(pageSize).value();
  }

  const getPageData = (productsData, cP = 1, pS = 4) => {
    console.log("GET APGE DTA", productsData);
    let filtered = productsData;

    console.log("FILTERED", filtered);
    const sorted = _.orderBy(filtered, "title", "asc");
    console.log("SORTED", sorted.sorted);
    // const newData = paginate(sorted, cP, pS);
    console.log("NEW DATA", sorted, filtered.length);

    const dataToReturn = {
      newData: sorted,
      totalCount: filtered.length,
    };
    console.log("DATA to send: ", dataToReturn);
    return dataToReturn;

    // setData(newData);
    // setTotalCount(filtered.length);
  };

  const sendData = getPageData(productsData);

  console.log("PRODUCTS: ", sendData);
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
