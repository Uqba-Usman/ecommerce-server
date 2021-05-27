import Link from "next/link";
import React, { useState } from "react";
import Datatable from "react-bs-datatable";
import { toast } from "react-toastify";
import productService from "../services/ProductService";
import CsvDownloader from "react-csv-downloader";

function TestDatatable({ sendData }) {
  // const data = sendData;
  const [data, setData] = useState(sendData);

  const handleDelete = async (rowId) => {
    console.log("PID", rowId);
    const newData = data.filter((p) => p._id !== rowId);
    setData(newData);
    try {
      const result = await productService.deleteProduct(rowId);
      console.log("DELETED BOOK", result);
      toast.info("Product Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
    console.log("New Data", newData);
  };

  const header = [
    {
      title: "Details",
      prop: "_id",
      cell: (row) => (
        <>
          <Link href={"/products/updateProduct/" + row._id}>
            <a>Edit</a>
          </Link>
          {"  "}

          <a href="#" onClick={() => handleDelete(row._id)}>
            Delete
          </a>
        </>
      ),
    },
    { title: "Title", prop: "title", filterable: true },
    { title: "Category", prop: "category", filterable: true },
    { title: "Description", prop: "description", filterable: true },

    { title: "Price", prop: "price", filterable: true },
  ];
  const [body, setBody] = React.useState([]);

  const columns = [
    {
      id: "title",
      displayName: "Title",
    },
    {
      id: "category",
      displayName: "Category",
    },
    {
      id: "description",
      displayName: "Description",
    },
    {
      id: "price",
      displayName: "Price",
    },
  ];

  // const exportData = () => {
  //   data.map((da) => {

  //   })
  // }

  const datas = [
    {
      first: "foo",
      second: "bar",
    },
    {
      first: "foobar",
      second: "foobar",
    },
  ];

  React.useEffect(() => {
    if (data.length > 0) {
      setBody(
        data.map((b) => {
          return {
            _id: b._id,
            title: b.title,
            category: b.category,
            description: b.description,
            price: b.price,
          };
        })
      );
    }
  }, [data]);

  return (
    <div
      className="tab-pane fade show active"
      id="home4"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div>
        {" "}
        <CsvDownloader
          filename="myfile"
          extension=".csv"
          columns={columns}
          datas={data}
          text="DOWNLOAD"
        />
      </div>
      <Datatable
        tableHeaders={header}
        tableBody={body}
        rowsPerPage={5}
        rowsPerPageOption={[5, 10, 15, 20]}
      />
    </div>
  );
}

export default TestDatatable;
