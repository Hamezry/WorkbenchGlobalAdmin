import { showNotification } from "@mantine/notifications";

import successIcon from "../Assets/successBadge.svg";
import error from "../Assets/error.svg";
import info from "../Assets/info.svg";

const customNotification = ({ heading, text, id }) => {
  const borderColor =
    id === "success"
      ? " #38CB89"
      : id === "error"
        ? "rgb(254, 31, 17)"
        : "rgb(250, 232, 76)";
  const icon =
    id === "success" ? (
      <img src={successIcon} alt='success icon' />
    ) : id === "error" ? (
      "error" && <img src={error} alt='error icon' />
    ) : (
      <img src={info} alt='warning icon' />
    );
  //id = 'success' | 'warning' | 'error'
  return showNotification({
    styles: {
      root: {
        borderRadius: "1rem",
        backgroundColor: "#fff",
        border: `1px solid ${borderColor}`,
        padding: "0 1.5rem 0 0 ",
        position: "relative",
      },
      body: { padding: "1.5rem 1.5rem 1.5rem 0" },
      closeButton: {
        backgroundColor: "unset",
        transform: "scale(1.25)",
        transition: "all",
        transitionDuration: "150ms",
      },
      icon: {
        backgroundColor: "#ffffff !important",
        margin: "0 3px",
        width: "40px",
        height: "40px",
      },
    },
    icon: icon,
    message: (
      <div
        className={`flex items-start  rounded-2xl before:content-[''] before:inset-0 before:absolute before:w-full before:h-full before:rounded-2xl ${id === "success"
            ? "before:bg-afexgreen-lighter"
            : id === "error"
              ? "before:bg-error-lighter"
              : "before:bg-warninig-lighter"
          }`}>
        <div className='pl-5 pr-4 child:py-1'>
          <p className='font-bold text-md '>{heading}</p>
          <p className=''>{text}</p>
        </div>
      </div>
    ),
    autoClose: 3000,
    // id: id,
  });
};
export default customNotification;
