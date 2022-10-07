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
    <div className="sticky font-muli left-0 w-[18%] bg-[#FFFFFF] h-[calc(100vh-90px)]">
      <div className=" mr-8 border h-[100%] p-5 border-r-[#F3F3F3]">

        <h1>hello</h1>
        <h1>side bar</h1>
      </div>

    </div>
  );
}

export default Sidebar;
