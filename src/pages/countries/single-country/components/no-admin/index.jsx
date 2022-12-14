import React, { useState } from 'react';
import productIcon from '../../../../../Assets/empty.gif';
import recieptIcon from '../../../../../Assets/receipt-text.png';

import Upload from '../../../modal/upload';
import UploadFinished from '../../../modal/upload-finished';

function NoAdminLevel() {
  const [upload, setUpload] = useState(false);
  const [finished, setFinished] = useState(false);

  return (
    <div className='p-3 rounded-3xl w-full bg-[#FFFF]'>
      <div className='flex justify-between p-3 border-b '>
        <p>Administrative Level</p>
      </div>

      {/*ADMIN LEVEL */}
      <div className='flex flex-col gap-5 mb-6 mt-14 items-center p-1 text-center'>
        <img src={productIcon} alt='no products gif' className='h-[150px]' />
        <p>No Records Created Yet.</p>
        <span className='text-[#9FA19C] text-[14px]'>
          There are no records logged in the database at this <br /> time, click
          on the button below to make upload.
        </span>

        <div className='flex justify-center gap-2 rounded items-center text-[12px] text-white bg-[#38CB89] h-[40px] w-[120px] p-4'>
          <button
            onClick={() => {
              setUpload(true);
            }}>
            Upload
          </button>
          <img src={recieptIcon} alt='receipt icon' />
        </div>
      </div>

      {upload && <Upload setMode={setUpload} setUpload={setFinished} />}
      {finished && (
        <UploadFinished setUpload={setUpload} setView={setFinished} />
      )}
    </div>
  );
}

export default NoAdminLevel;
