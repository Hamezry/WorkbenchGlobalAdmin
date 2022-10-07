import React from "react";
import { useState } from "react"
import Deactivate from "../Tenants/Deactivate";
import Successmodal from "../Successmodal";



function Deactivatemodal({ modalData, setViewDeactivate, setViewActivate}) {
    const [deactivate, setDeactivate] = useState(true)
    const [success, setSuccess] = useState(false)
  
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
        {deactivate && <Deactivate setDeactivate ={setDeactivate} setSuccess={setSuccess} />}
        {success && <Successmodal setViewActivate={setViewActivate} setSuccess={setSuccess} setViewDeactivate={setViewDeactivate}/>}
    </div>
  );
}

export default Deactivatemodal;