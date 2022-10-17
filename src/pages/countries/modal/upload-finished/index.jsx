import React from 'react';
import excelicon from '../../../../Assets/excelicon.svg';
import deskicon from '../../../../Assets/desktopview.svg';

function UploadFinished({ setView }) {
  return (
    <div
      className='w-screen font-muli h-screen bg-[rgba(50,59,75,0.7)] fixed top-0 left-0 z-50 flex items-center justify-center'
      onClick={() => setView(false)}>
      <div
        className='bg-[#FFFFFF] flex flex-col items-center absolute w-[600px] h-[490px] rounded-3xl px-6'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex items-center text-center py-8 w-full'>
          <p className='text-[18px] w-[95%] self-center'>
            Upload or Drag and Drop
          </p>

          <button onClick={() => setView(false)}>X</button>
        </div>

        <div className='w-full flex flex-col items-center gap-6 h-[300px] bg-[#f8f8f9] border border-gray-700 border-dotted rounded-xl '>
          <img src={excelicon} alt='excel icon' className='mt-14' />

          <p>
            Levels.csv <span>. 2MB document</span>
          </p>
        </div>

        <div className='flex w-full p-2 justify-between items-center'>
          <img src={deskicon} alt='desk icon' />

          <button
            onClick={() => {
              setView(false);
            }}
            className='w-[100px] font-medium text-sm text-white bg-[#38CB89] rounded-lg hover:shadow p-3 px-6'>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadFinished;
