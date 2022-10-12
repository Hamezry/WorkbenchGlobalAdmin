import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const url = 'https://wb-temp.afexnigeria.com/WB3/api/v1/create-product';

function Productmodal({ setModal, modalData }) {
  const [product, setProduct] = useState(modalData)

  console.log(product);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post(url, product);

    console.log(resp);
    setModal(false);
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const hanldeChecked = (e) => {
    setProduct((prev) => ({ ...prev, certified: e.target.checked }))
  }

  return (
    <div className='w-[100vw] font-muli h-[100vh] bg-[rgba(50,59,75,0.7)] fixed z-50 top-0 left-0'>
      <div className='bg-[#FFFFFF] absolute w-[450px] h-[700px] left-[38%] mt-[8%] rounded-3xl px-10'>
        <div className='flex justify-between  items-center border-b-2 py-6 w-full'>
          <p className='text-[18px]'>Create Product</p>

          <div className='titleCloseBtn'>
            <button
              onClick={() => {
                setModal(false);
              }}>
              X
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='my-10'>
          <div className='flex flex-col gap-8'>
            <label>
              <p className='text-[14px] text-[#54565B] pb-2'>Product Name</p>
              <input
                id='name'
                name='name'
                type='text'
                className='w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='Insert Name'
                value={product?.name}
                onChange={handleInputChange}
              />
            </label>

            <label>
              <p className='text-[14px] text-[#54565B] pb-2'>Code</p>
              <input
                id='code'
                name='code'
                type='text'
                className='w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
                placeholder='Insert Volume'
                value={product?.code}
                onChange={handleInputChange}
              />
            </label>

            <label>
              <p className='text-[14px] text-[#54565B] pb-2'>Type</p>

              <select
                id='product_type'
                name='product_type'
                className='w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-5 focus:outline-none focus:border-slate-500 hover:shadow'
                value={product?.product_type}
                onChange={handleInputChange}>
                <option value=''>Select Type</option>
                <option value='Input'>Input</option>
                <option value='Commodity'>Commodity</option>
                <option value='Fees'>Fees</option>
              </select>
            </label>

            <label>
              <p className='text-[14px] text-[#54565B] pb-2'>Unit Type</p>

              <select
                id='unit_type'
                className='w-full py-3 border-none bg-[#F1F2F3] text-[#9FA19C] text-[14px] rounded-lg px-5 focus:outline-none focus:border-slate-500 hover:shadow'
                value={product?.unit_type}
                name='unit_type'
                onChange={handleInputChange}>
                <option value='Type' className='bg-[#F1F2F3]'>
                  Select Unit Type
                </option>
                <option value='Bags'>Bags</option>
                <option value='Carton'>Carton</option>
                <option value='Bottle'>Bottle</option>
                <option value='Kilogram'>Kilogram</option>
                <option value='Metric Tonne'>Metric Tonne</option>
              </select>
            </label>

            <div className='flex items-center gap-3'>
              <label className=''>
                <input
                  type='checkbox'
                  id='remember'
                  className='w-4 h-4 focus:bg-[#38CB89]'
                  value={product?.certified}
                  checked={false}
                  onChange={hanldeChecked}
                />
              </label>
              <p>Sustainable Product?</p>
            </div>

            {/* <div className='self-center'>
                            <Link to="/productlist"
                                onClick={() => {
                                    
                                }}> */}

            <button
              className='w-full py-3 font-medium text-white bg-[#38CB89] rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'
              type='submit'>
              Submit
            </button>
            {/* </Link> */}
            {/* </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Productmodal;
