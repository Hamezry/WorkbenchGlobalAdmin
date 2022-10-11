import React from "react";
import { useState } from "react"
import Deactivate from "./Deactivate";




function Deactivatemodal({ setDeactivateProduct }) {
    const [deactivate, setDeactivate] = useState(true)
   
  
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
      
        {deactivate && <Deactivate setDeactivate ={setDeactivate}  setDeactivateProduct ={ setDeactivateProduct} />}
       
    </div>
  );
}

export default Deactivatemodal;
