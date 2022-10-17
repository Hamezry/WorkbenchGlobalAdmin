import React from 'react';
import cloudicon from '../../../../Assets/cloudicon.svg';

function Upload({ setMode, setUpload }) {
  return (
    <div
      className='w-screen font-muli h-screen bg-[rgba(50,59,75,0.7)] fixed top-0 left-0 z-50 flex items-center justify-center'
      onClick={() => setMode(false)}>
      <div
        className='bg-[#FFFFFF] flex flex-col items-center absolute w-[600px] h-[490px] rounded-3xl px-6'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex items-center text-center py-8 w-full'>
          <p className='text-[18px] w-[95%] self-center'>
            Upload or Drag and Drop
          </p>

          <div className='titleCloseBtn'>
            <button
              onClick={() => {
                setMode(false);
              }}>
              X
            </button>
          </div>
        </div>

        <div className='w-full flex flex-col items-center gap-6 h-[300px] bg-[#f8f8f9] border border-gray-700 border-dotted rounded-xl '>
          <img src={cloudicon} alt='cloud icon' className='mt-14' />

          <p>Drag and drop your File here or</p>

          <div className='self-center'>
            <span
              onClick={() => {
                setMode(false);
                setUpload(true);
              }}
              className='w-[100px] py-2 text-sm font-medium text-[#38CB89] bg-[rgba(56,203,137,0.1)] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center cursor-pointer'>
              Choose File
            </span>
          </div>
        </div>

        <button className='w-[120px] mt-6 py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow text-center'>
          Upload
        </button>
      </div>
    </div>
  );
}

export default Upload;
