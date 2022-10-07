import React from "react";
import { useState } from "react"
import Deactivate from "../Tenants/Deactivate";
import Deactivatesuccess from "../Deactivatesuccess";



function Deactivatemodal({ setViewDeactivate, setViewActivate, modalData, openModal }) {
    const [deactivate, setDeactivate] = useState(true)
    const [success, setSuccess] = useState(false)
  
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
        {deactivate && <Deactivate setDeactivate ={setDeactivate} setSuccess={setSuccess}  modalData={modalData} openModal={openModal} />}
        {success && <Deactivatesuccess  setSuccess={setSuccess}  setViewDeactivate={setViewDeactivate}/>}
    </div>
  );
}

export default Deactivatemodal;
