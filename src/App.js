import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FolderList } from "./folderList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);

  console.log(users);

  return (
    <div className="App">
      <FolderList></FolderList>
    </div>
  );
}

export default App;
