import React from "react";
import notesService from "../../services/NotesService";

function QueryList() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    notesService
      .getAllNotes()
      .then((res) => {
        console.log(res);
        setData(res);
        getChatList(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const getChatList = (res) => {
    const uniqueNames = Array.from(new Set(res.map((a) => a.chatName))).map(
      (id) => {
        console.log("ID: " + id);
        return res.find((a) => a.chatName === id);
      }
    );
    const permittedValues = uniqueNames.map((value) => value.chatName);
    console.log("permittedValues: ", permittedValues);
    setData(uniqueNames);
  };

  return (
    <div className="container">
      <div class="col-lg-4 center pb-5"></div>
      {data.length === 0 ? (
        <p>There is no Product available</p>
      ) : (
        <div className="shop">
          <div className="row">
            {data.map((pd, index) => (
              <a href={`/queryChat/${pd.chatName}`} key={index}>
                <li>{pd.chatName}</li>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* {productsData.map((pd, index) => (
            <SingleProduct key={index} product={pd} />
          ))} */}
    </div>
  );
}

export default QueryList;
