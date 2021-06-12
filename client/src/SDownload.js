import axios from "axios";
import React from "react";
import fileDownload from "js-file-download";
import download from "downloadjs";
// )(data, strFileName, strMimeType);"
// var Blob = require("blob");
function SDownload() {
  const [file, setFile] = React.useState();

  const handleChange = () => {
    axios.get("http://localhost:4000/api/upload").then((res) => {
      // then print response status
      console.log(res.data);
      fileDownload(res.data, "here.jpg");
    });
  };

  React.useEffect(() => {}, []);
  return (
    <div>
      <a
        // href={getFile.url}
        href="#"
        onClick={handleChange}
        // download={selectedFile && selectedFile.name}
      >
        Downlaod
      </a>
    </div>
  );
}

export default SDownload;
