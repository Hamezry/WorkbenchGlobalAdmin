import React from "react";
import Modalone from "./Modalone";
import Modaltwo from "./Modaltwo";
import Successmodal from "./Successmodal";


function Adminmodal() {
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
        <Modaltwo/>
        <Modalone/>
       
    </div>
  );
}

export default Adminmodal;
