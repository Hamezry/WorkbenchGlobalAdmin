import React from "react";
import { useState } from "react"
import Activate from "./Activate";
import Successmodal from "./Successmodal";



function Activatemodal() {
    const [activate, setActivate] = useState(false)
    const [deactivate, setUpload] = useState(false)
    const [view, setView] = useState(false)
  
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
        {mode && <Activate setMode={setMode} setUpload={setUpload} />}
        {upload && <Deactivate/>}
        {view && <Successmodal/>}
    </div>
  );
}

export default Activatemodal;
