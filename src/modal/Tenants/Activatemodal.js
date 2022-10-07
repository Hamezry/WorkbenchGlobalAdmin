import React from "react";
import { useState } from "react"
import Activate from "../Tenants/Activate";
import Activatesuccess from "../ Activatesuccess";



function Activatemodal({ modalData, openModal, setViewActivate, setViewDeactivate}) {
    const [activate, setActivate] = useState(true)
    const [success, setSuccess] = useState(false)
  
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
        {activate && <Activate setViewActivate={setViewActivate} setActivate={setActivate} setSuccess={setSuccess} modalData={modalData} openModal={openModal} />}
        {success && <Activatesuccess  setViewActivate={setViewActivate} setViewDeactivate={setViewDeactivate} setSuccess={setSuccess}/>}
    </div>
  );
}

export default Activatemodal;
