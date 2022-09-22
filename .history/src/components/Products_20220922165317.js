import React from 'react'
import productIcon from '../Assets/empty.gif'
import recieptIcon from '../Assets/receipt-text.png'


function Products({ setModal }) {
  return (
    <div className='w-[85%] font-muli bg-[#FFFFFF] h-[calc(100vh-90px)] p-1 overflow-y-auto'>
      <div className='rounded-3xl p-8 h-[100%] bg-[#F9F9F9]'>

        <div className='bg-[#FFFFFF] rounded-3xl w-[100%] h-[100%]'>

          <div className='p-5 border-b-2'> <p>Product List</p></div>

          <div className='flex flex-col gap-5 object-center items-center p-1 text-center'>
            <img src={productIcon} alt='' className='h-[200px]' />
            <p>No Products Created Yet.</p>
            <span className='text-[#9FA19C] text-[14px]'>There are no products logged in the database <br /> at this time, click on the button below to <br /> create a product.</span>

            <div className='flex justify-between rounded items-center text-[12px] text-white bg-[#38CB89] h-[40px] w-[142px] p-4'>

              <button onClick={() => {
                setModal(true);
              }}
              >
                Create product
              </button>
              <img src={recieptIcon} alt='' />

            </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Products