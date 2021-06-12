import React from "react";
import axios from "axios";

function SUpload() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const changeHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const changeEmailHandler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onClickHandler = () => {
    console.log("SELECTED FILE: ", selectedFile);
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("email", email);
    data.append("name", name);

    axios
      .put("http://localhost:4000/api/upload/update", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res);
      });
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input type="file" name="file" onChange={changeHandler} />
      <button
        type="button"
        class="btn btn-success btn-block"
        onClick={onClickHandler}
      >
        Upload
      </button>
    </div>
  );
}

export default SUpload;
