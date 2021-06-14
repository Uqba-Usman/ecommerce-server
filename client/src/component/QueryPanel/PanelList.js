import React from "react";

function PanelList({ list }) {
  const [data, setData] = React.useState(list);
  React.useEffect(() => {
    const uniqueNames = Array.from(new Set(data.map((a) => a.chatName))).map(
      (id) => {
        console.log("ID: " + id);
        return data.find((a) => a.chatName === id);
      }
    );
    // const permittedValues = uniqueNames.map((value) => value.chatName);
    // console.log("permittedValues: ", permittedValues);
    // return uniqueNames;
    setData(uniqueNames);
  }, [list]);
  return (
    <div>
      {console.log("data ", data)}
      {data.map((listItem) => (
        <div key={listItem._id}>
          <li>{listItem.chatName}</li>
        </div>
      ))}
    </div>
  );
}

export default PanelList;
