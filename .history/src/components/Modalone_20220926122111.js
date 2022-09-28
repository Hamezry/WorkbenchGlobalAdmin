import React from "react";
import excelicon from "../Assets/excelicon.svg";
import deskicon from "../Assets/desktopview.svg";

function Modalone() {
  return (
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
        <img src={excelicon} alt="" className="mt-14" />

        <p>
          Levels.csv <span>. 2MB document</span>
        </p>
      </div>

      
        <div className="flex justify-between">
          <img src={deskicon} alt="" />

          <button className="font-medium text-white bg-[#38CB89] rounded-lg hover:shadow">
            Upload
          </button>
        </div>
      
    </div>
  );
}

export default Modalone;
