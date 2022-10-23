import { useState } from 'react';
import { Popover } from '@mantine/core';
import { BsThreeDots } from 'react-icons/bs';

import { ProductsAPIs } from '../api';

import UpdateProductModal from '../modal/update-product';
import DeactivateProductmodal from '../modal/deactivate';

import notifcation from '../../../utils/notification';

const changeStatus = async (pk) => {
  const resp = await ProductsAPIs.deactivate_product(pk);

  if (!resp.data || !resp.data.responseCode) {
    notifcation({
      heading: 'Oops! Something went wrong',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      id: 'error',
    });
  }

  notifcation({
    heading: 'Product deactivated successfully',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    id: 'success',
  });
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
        width={150}
        styles={{
          dropdown: {
            right: '50%',
          },
        }}
        closeOnClickOutside>
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
          close={() => setOpenUpdateProductModal(false)}
          show={openUpdateModal}
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
