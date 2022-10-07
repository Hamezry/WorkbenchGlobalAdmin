import React from "react";
import { useState } from "react";
import orgIcon from "../Assets/building.svg";
import prodIcon from '../Assets/box.svg'
import globeIcon from "../Assets/world.svg";
import bulkIcon from "../Assets/folder-2.svg";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [navlink, setNavlink] = useState("");

  return (
    <div className="sticky font-muli left-0 w-[16%] bg-[#FFFFFF] h-[calc(100vh-90px)]">

      <div classname="flex h-[100%] bg-slate-900 mr-6 p-6">

        <div className="mt-4">
          <span className="text-sm font-light text-gray-400 uppercase">PAGES</span>
        </div>

        <button
          onClick={() => {
            setNavlink("tenants");
            navigate("/");
          }}
          className={
            navlink === "tenants"
              ? "cursor-pointer hover:bg-[#e2f8ee] w-full bg-[#e2f8ee] border-r-4 border-[#38CB89] mt-4 flex items-center "
              : "flex items-center hover:bg-[#e2f8ee] w-full mt-4"
          }
        >
          <span className="flex gap-4 items-center p-2">
            <span>
              <img src={orgIcon} alt="" />
            </span>
            <span>Tenants</span>
          </span>
        </button>

        <button
          onClick={() => {
            setNavlink("products");
            navigate("/products");
          }}
          className={
            navlink === "products"
              ? "cursor-pointer w-full hover:bg-[#e2f8ee] bg-[#e2f8ee] border-r-4 border-[#38CB89] flex mt-4 items-center "
              : "flex w-full  hover:bg-[#e2f8ee] items-center mt-4 "
          }
        >
          <span className="flex gap-4 items-center p-2">
            <span>
              <img src={prodIcon} alt="" />
            </span>
            <span>Products</span>
          </span>
        </button>

        <button
          onClick={() => {
            setNavlink("country");
            navigate("/countrypage");
          }}
          className={
            navlink === "country"
              ? "w-full cursor-pointer hover:bg-[#e2f8ee] bg-[#e2f8ee] border-r-4 border-[#38CB89] flex mt-4 items-center "
              : "w-full flex items-center hover:bg-[#e2f8ee] mt-4"
          }
        >
          <span className="flex  gap-4 items-center p-2">
            <span>
              <img src={globeIcon} alt="" />
            </span>
            <span>Countries</span>
          </span>
        </button>





        <div className="flex mt-4 gap-4 items-center  p-2">
          <span>
            <img src={bulkIcon} alt="" />
          </span>
          <span>Bulk Uploads</span>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;
