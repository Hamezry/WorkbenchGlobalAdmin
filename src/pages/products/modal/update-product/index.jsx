import React, { useState } from 'react';
import { Tooltip } from '@mantine/core';
import { InfoCircle } from 'iconsax-react';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '../../../../components/Button';
import axios from '../../../../utils/axios';
import notification from '../../../../utils/notification';
import { useProductsCtx } from '../../../../contexts';

function UpdateProductmodal({ setModal, modalData }) {
  const { refreshContext } = useProductsCtx();
  const [product, setProduct] = useState(modalData);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const resp = await axios.post(`product/update/${product.pk}`, product);

    if (!resp.data || resp.data.responseCode !== '100') {
      setLoading(false);
      notification({
        heading: 'Oops! Something went wrong',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        id: 'error',
      });
      return;
    }

    setLoading(false);
    setModal(false);
    notification({
      heading: 'Product updated successfully',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      id: 'success',
    });
    refreshContext();
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const hanldeChecked = (e) => {
    setProduct((prev) => ({ ...prev, certified: e.target.checked }));
  };

  return (
    <div
      className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.7)] fixed z-50 top-0 left-0 flex justify-center items-center'
      onClick={() => setModal(false)}>
      <div
        className='bg-[#FFFFFF] w-[450px] rounded-3xl overflow-y-scroll'
        onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between  items-center border-b-[1px] py-6 w-full px-8'>
          <p className='text-[18px]'>Update Product</p>

          <div className='titleCloseBtn'>
            <button
              onClick={() => {
                setModal(false);
              }}>
              <AiOutlineClose className='text-gray-500 text-xl' />
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className='space-y-7 text-[14px] text-[#54565B]'>
          <div className='flex flex-col space-y-7  p-8'>
            <div className='space-y-5'>
              <label>Product Name</label>
              <input
                id='name'
                name='name'
                type='text'
                className='w-full border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow py-4'
                placeholder='Insert Name'
                value={product.name}
                onChange={handleInputChange}
              />
            </div>

            <div className='space-y-5'>
              <label>Code</label>
              <input
                id='code'
                name='code'
                type='text'
                className='w-full border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow py-4'
                placeholder='Insert Volume'
                value={product.code}
                onChange={handleInputChange}
              />
            </div>

            <div className='space-y-5'>
              <label>Type</label>
              <select
                id='product_type'
                name='product_type'
                className='w-full border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-5 focus:outline-none focus:border-slate-500 hover:shadow py-4'
                value={product.product_type}
                onChange={handleInputChange}>
                <option value=''>Select Type</option>
                <option value='Input'>Input</option>
                <option value='Commodity'>Commodity</option>
                <option value='Fees'>Fees</option>
              </select>
            </div>

            <div className='space-y-5'>
              <label>Unit Type</label>
              <select
                id='unit_type'
                className='w-full border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-5 focus:outline-none focus:border-slate-500 hover:shadow py-4'
                value={product.unit_type}
                name='unit_type'
                onChange={handleInputChange}>
                <option value='Type' className='bg-[#F1F2F3]'>
                  Select Unit Type
                </option>
                <option value='Bags'>Bags</option>
                <option value='Carton'>Carton</option>
                <option value='Bottle'>Bottle</option>
              </select>
            </div>

            <div className='flex items-center space-x-3'>
              <input
                type='checkbox'
                name='certified_product'
                id='certified_product'
                checked={product.certified}
                onChange={hanldeChecked}
                className='mt-1'
              />
              <label htmlFor='certified_product' className='text-sm mt-1'>
                Certified Product?
              </label>
              <Tooltip
                label='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita placeat totam deserunt suscipit necessitatibus iusto, ab dolore eveniet porro ipsum?'
                multiline
                withArrow
                width={309}
                offset={20}
                radius='md'
                className='mt-1'>
                <InfoCircle size={16} />
              </Tooltip>
            </div>

            <Button type='submit' text='Submit' loading={loading} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProductmodal;
