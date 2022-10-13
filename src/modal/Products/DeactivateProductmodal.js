import React from "react";
import Deactivate from "./Deactivate";

function DeactivateProductmodal({ setDeactivateProduct, deactivate, openModal }) {



  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">

      <Deactivate setDeactivateProduct={setDeactivateProduct} openModal={openModal} deactivate={deactivate} />

    </div>
  );
}

export default DeactivateProductmodal;
