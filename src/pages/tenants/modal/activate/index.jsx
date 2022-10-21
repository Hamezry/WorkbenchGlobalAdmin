import React, { useState } from 'react';

import Activate from './prompt';

function Activatemodal({ modalData, setViewActivate }) {
  const [activate, setActivate] = useState(true);

  return (
    <div
      className='w-screen font-muli h-screen bg-[rgba(50,59,75,0.8)] fixed z-50 -top-[56px] left-0 flex justify-center items-center'
      onClick={() => setViewActivate(false)}>
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
