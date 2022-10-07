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
    <div className="sticky flex flex-col font-muli left-0 w-[17%] bg-[#FFFFFF] h-[calc(100vh-90px)]">

      <div classname="flex flex-col bg-cyan-400 h-[100%] mr-6 p-6">

       
      </div>

    </div>
  );
}

export default Sidebar;
