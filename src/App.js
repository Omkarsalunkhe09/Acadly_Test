import logo from "./logo.svg";
import "./App.css";
// import { Home } from "./components/Home";
import { Table } from "./components/Table";
import { Routes, Route } from "react-router-dom";
import { Userinfo } from "./components/Userinfo";
import { DebounceSrcatch } from "./components/Debouncing";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <DebounceSrcatch /> */}
      <Routes>
        <Route path="/" element={<Table />}></Route>
        <Route path={"/info/:id"} element={<Userinfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
