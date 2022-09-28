import React from "react";
import { useState } from "react"
import Modalone from "./Modalone";
import Modaltwo from "./Modaltwo";
import Successmodal from "./Successmodal";



function Adminmodal(setViewAdminModal) {
    const [mode, setMode] = useState(true)
    const [upload, setUpload] = useState(false)
    const [view, setView] = useState(false)
  
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
        {mode && <Modalone setMode={setMode} setUpload={setUpload} />}
        {upload && <Modaltwo setUpload={setUpload} setView={setView}/>}
        {view && <Successmodal setView={setView} setViewAdminModal />}
    </div>
  );
}

export default Adminmodal;
