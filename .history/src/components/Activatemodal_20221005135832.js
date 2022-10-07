import React from "react";
import { useState } from "react"
import Activate from "./Activate";
import Deactivate from "./Deactivate";
import Successmodal from "./Successmodal";



function Activatemodal() {
    const [activate, setActivate] = useState(false)
    const [deactivate, setDeactivate] = useState(false)
    const [success, setSuccess] = useState(false)
  
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
        {activate && <Activate setActivate={setActivate} setSuccess={setSuccess} />}
        {deactivate && <Deactivate setDeactivate ={setDeactivate} setSuccess={setSuccess} />}
        {success && <Successmodal setSuccess={setSuccess}/>}
    </div>
  );
}

export default Activatemodal;
