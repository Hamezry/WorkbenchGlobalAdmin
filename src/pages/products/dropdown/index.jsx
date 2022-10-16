import { useState } from 'react';
import { Popover } from '@mantine/core';
import { BsThreeDots } from 'react-icons/bs';

import UpdateProductModal from '../modal/update-product';
import DeactivateProductmodal from '../modal/deactivate';

import axios from '../../../utils/axios';

const changeStatus = async (pk) => {
  const resp = await axios.get(`product/change/status/${pk}`);
  if (!resp.data || !resp.data.responseCode) return;
};

function ProductDropdown({ singleProduct }) {
  const [opened, setOpened] = useState(false);
  const [openUpdateModal, setOpenUpdateProductModal] = useState(false);
  const [openDecactivateModal, setOpenDecactivateModal] = useState(false);

  return (
    <>
      <Popover
        opened={opened}
        onChange={setOpened}
        width={'100%'}
        position='left-end'>
        <Popover.Target>
          <BsThreeDots
            onClick={() => setOpened(true)}
            className='text-[20px] text-black cursor-pointer'
          />
        </Popover.Target>

        <Popover.Dropdown className='child:cursor-pointer space-y-1 hover:child:bg-afexgreen-lighter child:p-1 p-1'>
          <p
            className='text-[14px] text-gray-400 rounded-md'
            onClick={() => {
              setOpenUpdateProductModal(true);
              setOpened(false);
            }}>
            Update
          </p>
          <p
            className='text-[14px] text-gray-400 rounded-md'
            onClick={() => {
              setOpened(false);
              setOpenDecactivateModal(true);
            }}>
            Deactivate
          </p>
        </Popover.Dropdown>
      </Popover>
      {openUpdateModal && (
        <UpdateProductModal
          setModal={setOpenUpdateProductModal}
          modalData={singleProduct}
        />
      )}
      {openDecactivateModal && (
        <DeactivateProductmodal
          setDeactivateProduct={setOpenDecactivateModal}
          deactivate={() => changeStatus(singleProduct.pk)}
          modalData={singleProduct}
        />
      )}
    </>
  );
}

export default ProductDropdown;
