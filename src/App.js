import "./App.css";
import Main from "./Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addmember from "./CRUD/Create/Addmember";
import Edit from "./CRUD/Update/Edit";
import View from "./CRUD/View";

function App() {
  return (
    <div className="App">
      <div className="main-body">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Addmember />} />
            <Route path="/view" element={<View />} />
            <Route path="/update" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;