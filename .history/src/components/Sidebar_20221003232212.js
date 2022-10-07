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
      <div classname="overflow-x-hidden text-[#8B908B] h-full border-r-1 flex flex-col">
        <ul classname="flex flex-col border-gray-60 border-r-2 h-[100%] mr-6 pl-4 py-4">
          <li className="mt-4">
            <div className="text-sm font-light text-gray-400 uppercase">PAGES</div>
          </li>

          <button
            onClick={() => {
              setNavlink("tenants");
              navigate("/");
            }}
            className={
              navlink === "tenants"
                ? "cursor-pointer hover:bg-[#e2f8ee] bg-[#e2f8ee] border-r-4 border-[#38CB89] mt-4 flex items-center "
                : "flex items-center hover:bg-[#e2f8ee] mt-4"
            }
          >
            <li className="flex gap-4 items-center  p-2">
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
                ? "cursor-pointer hover:bg-[#e2f8ee] bg-[#e2f8ee] border-r-4 border-[#38CB89] flex mt-4 items-center "
                : "flex hover:bg-[#e2f8ee] items-center mt-4 "
            }
          >
            <li className="flex gap-4 items-center p-2">
              <span>
                <img src={prodIcon} alt="" />
              </span>
              <span className="">Products</span>
            </li>
          </button>

          <button
            onClick={() => {
              setNavlink("country");
              navigate("/countrypage");
            }}
            className={
              navlink === "country"
                ? "cursor-pointer hover:bg-[#e2f8ee] bg-[#e2f8ee] border-r-4 border-[#38CB89] flex mt-4 items-center "
                : "flex items-center hover:bg-[#e2f8ee] mt-4"
            }
          >
            <li className="flex  gap-4 items-center p-2">
              <span>
                <img src={globeIcon} alt="" />
              </span>
              <span className="">Countries</span>
            </li>
          </button>

          
          
          

          <li className="flex mt-4 gap-4 items-center  p-2">
            <span>
              <img src={bulkIcon} alt="" />
            </span>
            <span>Bulk Uploads</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
