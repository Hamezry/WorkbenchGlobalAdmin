import React from "react";
import Adminlist from "./Adminlist";
import Adminpage from "./Adminpage";
import { Routes, Route } from "react-router-dom";

function Adminlevel({ setViewAdminModal }) {
  return (
    <div className="p-3 rounded-3xl w-full bg-[#FFFF]">
      <Routes>
        <Route
          path="/"
          element={<Adminpage setViewAdminModal={setViewAdminModal} />}
        />
        <Route
          path="/adminlist"
          element={<Adminlist setViewAdminModal={setViewAdminModal} />}
        />
      </Routes>
    </div>
  );
}

export default Adminlevel;
