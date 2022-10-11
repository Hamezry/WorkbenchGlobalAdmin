import React from "react";
import { useState } from "react"
import Deactivate from "./Deactivate";




function Deactivatemodal({ setViewDeactivate, modalData, openModal }) {
    const [deactivate, setDeactivate] = useState(true)
   
  
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
      
        {deactivate && <Deactivate setDeactivate ={setDeactivate} setViewDeactivate={setViewDeactivate}  modalData={modalData} openModal={openModal} />}
       
    </div>
  );
}

export default Deactivatemodal;
