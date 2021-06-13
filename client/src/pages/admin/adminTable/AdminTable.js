import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import { Button, Form } from "react-bootstrap";
import productService from "../../../services/ProductService";

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 40px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      //   id="search"
      type="text"
      placeholder="Filter By Title, Price"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

const AdminTable = () => {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    console.log("Object.keys(data[0]): ", data);
    console.log("ARRAY: ", array);
    const keys = Object.keys(array[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  const Export = ({ onExport }) => (
    <Button onClick={(e) => onExport(e.target.value)}>Export</Button>
  );

  const [body, setBody] = React.useState([]);

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

  const columns = [
    {
      name: "Edit",
      button: "true",
      cell: (row) => <a href={"/products/updateProduct/" + row._id}>Edit</a>,
    },
    {
      name: "Delete",
      button: "true",
      cell: (row) => (
        <a href="#" onClick={() => handleDelete(row._id)}>
          Delete
        </a>
      ),
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Category",
      selector: "category",
      sortable: true,
    },
    {
      name: "Price",
      selector: "price",
      sortable: true,
    },
  ];

  useEffect(() => {
    if (data.length > 0) {
      setBody(
        data.map((b) => {
          return {
            _id: b._id,
            title: b.title,
            category: b.category,
            description: b.description,
            price: b.price,
            // saleApply: b.saleApply,
            // isHotProduct: b.isHotProduct,
            // salePercent: b.salePercent,
          };
        })
      );
    }
  }, [data]);

  useEffect(() => {
    productService.getAllProducts().then((response) => {
      setData(response);
    });
  }, []);

  const filteredItems = body.filter(
    (item) =>
      (item.title &&
        item.title.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.price && item.price.toString().includes(filterText))
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const actionsMemo = React.useMemo(
    () => (
      <Export
        onExport={() => {
          productService
            .getAllProducts()
            .then((response) => {
              // setData(response);
              downloadCSV(response);
            })
            .catch((error) => console.log(error));
          // downloadCSV(filteredItems);
        }}
      />
    ),
    []
  );

  return (
    <div
      className="tab-pane fade show active"
      id="home4"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      {/* <PoloLoaderModal show={fetching} id="myBookingsModalLoader" /> */}
      <DataTable
        title="My Products"
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        //   selectableRows
        persistTableHead
        actions={actionsMemo}
      />
    </div>
  );
};

export default AdminTable;
