import React from "react";
import cloudicon from "../Assets/cloudicon.svg";
import Administrativemodal from "../components/Administrativemodal";

function Adminmodal() {
  return (
    <div className="w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.8)] fixed z-50 top-0 left-0">
      <div className="bg-[#FFFFFF] flex flex-col items-center absolute w-[600px] h-[490px] left-[35%] mt-[10%] rounded-3xl px-6">
        <div className="flex items-center text-center py-8 w-full">
          <p className="text-[18px] w-[95%] self-center">
            Upload or Drag and Drop
          </p>

          <div className="titleCloseBtn">
            <button>X</button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-6 h-[300px] bg-[#f8f8f9] border border-gray-700 border-dotted rounded-xl ">
          <img src={cloudicon} alt="" className="mt-14" />

          <p>Drag and drop your File here or</p>

          <div className="self-center">
            <span className="w-[100px] py-2 text-sm font-medium text-[#38CB89] bg-[rgba(56,203,137,0.1)] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
              Choose File
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="self-center">
            <span className="w-[120px] py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
              Upload
            </span>
          </div>
        </div>
      </div>

      <div className="hidden">
        <Administrativemodal />
      </div>

    </div>
  );
}

export default Adminmodal;
