import React from "react";
import CsvDownloader from "react-csv-downloader";

const columns = [
  {
    id: "first",
    displayName: "First column",
  },
  {
    id: "second",
    displayName: "Second column",
  },
];

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
class ExportData extends React.Component {
  render() {
    return (
      <div>
        <CsvDownloader
          filename="myfile"
          extension=".csv"
          columns={columns}
          datas={datas}
          text="DOWNLOAD"
        />
      </div>
    );
  }
}

export default ExportData;
