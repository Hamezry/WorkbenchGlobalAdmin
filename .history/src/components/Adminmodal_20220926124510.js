import React from "react";
import Modaltwo from "../components/Modaltwo";
import Modalone from "../components/Modalone";

function Adminmodal() {
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
        <Modaltwo />
        {/*<Modalone /> */}
    </div>
  );
}

export default Adminmodal;
