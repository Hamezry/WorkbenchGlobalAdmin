import React from 'react';
import { useState } from 'react';
import Upload from '../upload';
import UploadFinished from '../upload-finished';

function Adminmodal() {
  const [mode, setMode] = useState(true);
  const [upload, setUpload] = useState(false);
  const [view, setView] = useState(false);

  return (
    <div className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0'>
      {mode && <Upload setMode={setMode} setUpload={setUpload} />}
      {upload && <UploadFinished setUpload={setUpload} setView={setView} />}
    </div>
  );
}

export default Adminmodal;
