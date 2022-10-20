import { showNotification } from "@mantine/notifications";

import successIcon from "../Assets/successBadge.svg";
import error from "../Assets/error.svg";
import info from "../Assets/info.svg";

const customNotification = ({ heading, text, id }) => {
  //id = 'success' | 'warning' | 'error'
  return showNotification({
    message: (
      <div className='flex items-start  rounded-2xl '>
        <div className=' flex justify-between pr-4 items-center'>
          <div
            className={`w-10 h-10  rounded-full flex items-center justify-center ${
              id === "success" ? "bg-afexgreen" : ""
            } ${id === "warning" ? "p-1" : ""}`}>
            {id === "success" && <img src={successIcon} alt='success icon' />}
            {id === "warning" && <img src={info} alt='warning icon' />}
            {id === "error" && <img src={error} alt='error icon' />}
          </div>
          <div className='pl-5'>
            <p className='font-bold '>{heading}</p>
            <p className='text-sm'>{text}</p>
          </div>
        </div>
      </div>
    ),
    autoClose: 4000,
    id: id,
  });
};
export default customNotification;
