import React, { useState } from 'react';

import Deactivate from './prompt';

function Deactivatemodal({ setViewDeactivate, modalData }) {
  const [deactivate, setDeactivate] = useState(true);

  return (
    <div
      className='w-screen font-muli h-screen bg-[rgba(50,59,75,0.8)] fixed z-50 -top-[56px] left-0 flex justify-center items-center'
      onClick={() => setViewDeactivate(false)}>
      {deactivate && (
        <Deactivate
          setDeactivate={setDeactivate}
          setViewDeactivate={setViewDeactivate}
          modalData={modalData}
        />
      )}
    </div>
  );
}

export default Deactivatemodal;
