import React, { useState } from 'react';

import Activate from './prompt';

function Activatemodal({ modalData, setViewActivate }) {
  const [activate, setActivate] = useState(true);

  return (
    <div className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0'>
      {activate && (
        <Activate
          setViewActivate={setViewActivate}
          setActivate={setActivate}
          modalData={modalData}
        />
      )}
    </div>
  );
}

export default Activatemodal;
