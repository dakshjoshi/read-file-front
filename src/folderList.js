import React, { useEffect, useState } from "react";
import axios from "axios";

export const FolderList = () => {
  const [folder, setFolder] = useState([]);

  const server = `https://read-file-back.herokuapp.com/`;
  const localServer = `http://localhost:6969/`;

  useEffect(async () => {
    let getDetails = await axios.get(server);
    setFolder(getDetails.data);
  }, []);

  return (
    <div>
      {console.log(folder)}
      <div className="d-flex m-2 h-50" id="folder">
        {folder.map((fold, i) => {
          if (fold.isFolder == true) {
            return (
              <div key={i} className="bg-light col-2  p-3 m-2">
                {fold.fileName}
              </div>
            );
          } else if (fold.fileType == ".txt") {
            return (
              <div key={i} className="bg-warning col-2  p-3 m-2">
                {fold.fileName}
              </div>
            );
          } else if (fold.fileType == ".js") {
            return (
              <div key={i} className="bg-info col-2  p-3 m-2">
                {fold.fileName}
              </div>
            );
          } else if (fold.fileType == ".ppt") {
            return (
              <div key={i} className="bg-danger col-2  p-3 m-2">
                {fold.fileName}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
