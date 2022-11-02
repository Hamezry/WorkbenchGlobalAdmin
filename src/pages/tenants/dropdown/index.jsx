import { useState } from "react";
import { Popover } from "@mantine/core";
import { MdExpandMore } from "react-icons/md";

import request from "../../../utils/axios";
import customNotification from "../../../utils/notification";

import { useTenantsCtx } from "../../../contexts";

function TenantDropdown({ selected }) {
  const { refreshContext } = useTenantsCtx();
  const [opened, setOpened] = useState(false);

  const bulkAction = (value) => {
    const selectedIds = selected.map((item) => +item);
    console.log(selectedIds);
    request({
      method: "post",
      url: `tenant/change/status/bulk`,
      data: {
        tenant_ids: selectedIds,
        value,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.data.responseCode === "100") {
          refreshContext();
          customNotification({
            heading: "Success!",
            text: response.data.message,
            id: "success",
          });
        }
      })
      .catch((e) => {
        customNotification({
          heading: "Error!",
          text: e.data.message,
          id: "error",
        });
      });
  };

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      width={"target"}
      position='bottom-end'>
      <Popover.Target>
        <button
          className='flex gap-4 border rounded-lg border-afexgreen text-afexgreen  items-center text-sm xl:text-[14px] hover:bg-afexgreen hover:text-[#ffff]  bg-[#ffff] xl:h-[40px] w-full p-2 xl:p-3'
          onClick={() => {
            setOpened((o) => !o);
          }}>
          Select Action{" "}
          <MdExpandMore
            className={`transition-all duration-200 ${
              opened ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </Popover.Target>

      <Popover.Dropdown>
        <button
          className='cursor-pointer hover:bg-afexgreen-lighter rounded-xl p-2 text-sm text-left'
          onClick={() => {
            setOpened((o) => !o);
            bulkAction(false);
          }}>
          Activate all
        </button>

        <button
          className='cursor-pointer hover:bg-afexgreen-lighter rounded-xl p-2 text-sm text-left'
          onClick={() => {
            setOpened((o) => !o);
            bulkAction(true);
          }}>
          {" "}
          Deactivate all
        </button>
      </Popover.Dropdown>
    </Popover>
  );
}

export default TenantDropdown;
