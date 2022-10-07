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
    <div className="sticky flex flex-col font-muli left-0 w-[16%] bg-[#FFFFFF] h-[calc(100vh-90px)] border-none">
      <div className="overflow-x-hidden text-[#8B908B] h-full border-r-1 flex flex-col">

        <div className="flex flex-col border-r-2 border-r-[#F3F3F3] h-[100%] mr-8 pt-4 pl-3">

          <div className="mt-4 ml-2">
            <span className="text-sm font-semibold text-gray-400 uppercase">PAGES</span>
          </div>

          <button
            onClick={() => {
              setNavlink("tenants");
              navigate("/");
            }}
            className={
              navlink === "tenants"
                ? "cursor-pointer hover:bg-[#e2f8ee] w-full bg-[#e2f8ee] border-r-4 border-[#38CB89] mt-4 flex items-center rounded "
                : "flex items-center rounded hover:bg-[#e2f8ee] w-full mt-4"
            }
          >
            <li className="flex gap-2 p-2">
              <span>
                <img src={orgIcon} alt="" />
              </span>
              <span>Tenants</span>
            </li>
          </button>

          <button
            onClick={() => {
              setNavlink("products");
              navigate("/products");
            }}
            className={
              navlink === "products"
                ? "cursor-pointer w-full hover:bg-[#e2f8ee] bg-[#e2f8ee] border-r-4 border-[#38CB89] flex mt-4 items-center rounded "
                : "flex w-full rounded hover:bg-[#e2f8ee] items-center mt-4 "
            }
          >
            <li className="flex gap-2 items-center p-2">
              <span>
                <img src={prodIcon} alt="" />
              </span>
              <span>Products</span>
            </li>
          </button>

          <button
            onClick={() => {
              setNavlink("country");
              navigate("/countrypage");
            }}
            className={
              navlink === "country"
                ? "w-full rounded cursor-pointer hover:bg-[#e2f8ee] bg-[#e2f8ee] border-r-4 border-[#38CB89] flex mt-4 items-center "
                : "w-full rounded flex items-center hover:bg-[#e2f8ee] mt-4"
            }
          >
            <li className="flex  gap-2 items-center p-2">
              <span>
                <img src={globeIcon} alt="" />
              </span>
              <span>Countries</span>
            </li>
          </button>

          
          
          

          <div className="flex mt-4 gap-2 items-center  p-2">
            <span>
              <img src={bulkIcon} alt="" />
            </span>
            <span>Bulk Uploads</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
