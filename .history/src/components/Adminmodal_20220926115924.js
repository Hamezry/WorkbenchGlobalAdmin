import React from "react";
import { Route, Routes } from "react-router-dom";
import Modaltwo from "../components/Modaltwo";
import Modalone from "../components/Modalone";

function Adminmodal() {
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
      <Routes>
        <Route path="/" element={<Modaltwo />} />
        <Route path="/modalone" element={<Modalone />} />
      </Routes>
    </div>
  );
}

export default Adminmodal;
