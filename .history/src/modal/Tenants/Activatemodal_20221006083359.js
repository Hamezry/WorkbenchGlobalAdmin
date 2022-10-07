import React from "react";
import { useState } from "react"
import Activate from "../Tenants/Activate";
import Successmodal from "../Successmodal";



function Activatemodal({ modalData, openModal}) {
    const [activate, setActivate] = useState(true)
    const [success, setSuccess] = useState(false)
  
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
        {activate && <Activate setActivate={setActivate} setSuccess={setSuccess} modalData={modalData} />}
        {success && <Successmodal setViewActivate={ openModal} setSuccess={setSuccess}/>}
    </div>
  );
}

export default Activatemodal;
