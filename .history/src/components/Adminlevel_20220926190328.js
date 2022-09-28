import React from "react";
import { useState } from "react";
import Adminlist from "./Adminlist";
import Adminpage from "./Adminpage";

function Adminlevel({ setViewAdminModal }) {
  const [page, setPage] = useState(false);
  const [level, setLevel] = useState(true);
  return (
    <div className="p-3 rounded-3xl w-full bg-[#FFFF]">
      {page && (
        <Adminpage setPage={setPage} setViewAdminModal={setViewAdminModal} />
      )}
      {level && <Adminlist setLevel={setLevel} />}
    </div>
  );
}

export default Adminlevel;
