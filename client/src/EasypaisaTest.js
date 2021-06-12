import axios from "axios";
import React from "react";
import LoginPageTest from "./LoginPageTest";

function EasypaisaTest() {
  const [contentData, setContentData] = React.useState();
  const handleSubmit = () => {
    console.log("Inside");
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/api/easypaisa")
      .then((res) => {
        // then print response status
        console.log(res.data);
        setContentData(res.data);
        // <LoginPageTest contentData={contentData} />;
      })
      .catch((err) => console.log("ERRor occured", err));
  }, []);
  return (
    <div>
      {/* <button onClick={handleSubmit}>Click Me</button> */}
      <div dangerouslySetInnerHTML={{ __html: contentData }}></div>;
    </div>
  );
}

export default EasypaisaTest;
