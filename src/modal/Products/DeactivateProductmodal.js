import React from "react";
import Deactivate from "./Deactivate";

function DeactivateProductmodal({ setDeactivateProduct, modalData, openModal }) {



  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">

      <Deactivate setDeactivateProduct={setDeactivateProduct} modalData={modalData} openModal={openModal} />

    </div>
  );
}

export default DeactivateProductmodal;