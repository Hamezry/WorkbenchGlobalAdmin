import React, { useState } from "react";

import Activate from "./prompt";
import Activatesuccess from "./success";

function Activatemodal({ modalData, setViewActivate }) {
  const [activate, setActivate] = useState(true);
  const [success, setSuccess] = useState(false);

  return (
    <div className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0'>
      {activate && (
        <Activate
          setViewActivate={setViewActivate}
          setActivate={setActivate}
          setSuccess={setSuccess}
          modalData={modalData}
        />
      )}
      {success && (
        <Activatesuccess
          setViewActivate={setViewActivate}
          setSuccess={setSuccess}
        />
      )}
    </div>
  );
}

export default Activatemodal;
