import React from "react";
import { useState } from "react"
import Modalone from "./Modaltwo";
import Modaltwo from "./Modalone";
import Successmodal from "./Successmodal";



function Adminmodal() {
    const [mode, setMode] = useState(true)
    const [upload, setUpload] = useState(false)
    const [view, setView] = useState(false)
  
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
        {mode && <Modalone setMode={setMode} setUpload={setUpload} />}
        {upload && <Modaltwo setUpload={setUpload} />}
        {view && <Successmodal setView={setView} />}
    </div>
  );
}

export default Adminmodal;
