import React from "react";
import Header from "../Header";
import Maps from "../Maps";
import Footer from "../Footer"; import Layout from "../Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Header />} />
          <Route path="kontact" element={<Maps />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
