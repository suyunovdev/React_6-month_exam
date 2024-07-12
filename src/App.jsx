import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Goods from "./assets/pages/Goods";
import Add from "./assets/pages/Add";
import Sidebar from "./assets/components/Sidebar";
import Header from "./assets/components/Header";
import Edit from "./assets/pages/Edit";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState({});
  const [location, setLocation] = useState(0);

  return (
    <Router>
      <Sidebar />
      <Header location={location} />
      <Routes>
        <Route
          path="/"
          element={<Goods name={name} setLocation={setLocation} />}
        />
        <Route
          path="/add"
          element={
            <Add name={name} setName={setName} setLocation={setLocation} />
          }
        />
        <Route path="/edit/:id" element={<Edit setLocation={setLocation} />} />
      </Routes>
    </Router>
  );
};

export default App;
