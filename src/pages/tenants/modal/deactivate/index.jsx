import React, { useState } from "react";

import Deactivate from "./prompt";
import Deactivatesuccess from "./success";

function Deactivatemodal({ setViewDeactivate, modalData }) {
  const [deactivate, setDeactivate] = useState(true);
  const [success, setSuccess] = useState(false);

  return (
    <div className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0'>
      {deactivate && (
        <Deactivate
          setDeactivate={setDeactivate}
          setViewDeactivate={setViewDeactivate}
          setSuccess={setSuccess}
          modalData={modalData}
        />
      )}
      {success && (
        <Deactivatesuccess
          setSuccess={setSuccess}
          setViewDeactivate={setViewDeactivate}
        />
      )}
    </div>
  );
}

export default Deactivatemodal;
