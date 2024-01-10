import React from "react";
import Welcome from "./pages/Welcome.jsx";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" Component={Welcome} />
          <Route path="/login" Component={Login} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
